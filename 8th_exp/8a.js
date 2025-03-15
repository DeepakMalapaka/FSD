function FindLargest()
{
    const userinput1=prompt("Enter the fist number:");
    const a=parseInt(userinput1);
    const userinput2=prompt("Enter the second number:");
    const b=parseInt(userinput2);
    const userinput3=prompt("Enter the third number:");
    const c=parseInt(userinput3);
    if(a>b && a>c) 
    {
        alert("LARGEST NUMBER IS :"+a);
    }
    else if(b>c) 
    {
        alert("LARGEST NUMBER IS :"+b);
    }
    else
    {
        alert("LARGEST NUMBER IS :"+c);
    }
}