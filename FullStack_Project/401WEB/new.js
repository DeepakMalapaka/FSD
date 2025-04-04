const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const express = require('express');
const path = require('path');
const app = express();
const admin = require('firebase-admin');
const serviceAccount = require('./key.json');

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = getFirestore();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

// Signup endpoint
app.post('/signupSubmit', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if email already exists
    const emailExists = await db.collection('SignUp-Details')
      .where('Email', '==', email)
      .get();

    if (!emailExists.empty) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Create user document
    await db.collection('SignUp-Details').add({
      Name: name,
      Email: email,
      Password: password, // Note: In production, you should hash the password
      CreatedAt: admin.firestore.FieldValue.serverTimestamp()
    });

    res.json({ message: 'Sign Up successful' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login endpoint
app.post('/loginSubmit', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const querySnapshot = await db.collection('SignUp-Details')
      .where('Email', '==', email)
      .where('Password', '==', password)
      .get();

    if (!querySnapshot.empty) {
      res.json({ success: true, redirect: '/movie.html' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
