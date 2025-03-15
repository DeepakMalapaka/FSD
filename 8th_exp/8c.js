function forLoop()
{
    var result="Printed Using for loop :<br>";
    for(var i=1;i<=10;i++)
    {
        result+=i+" ";
    }
    document.getElementById("output").innerHTML=result;
}
function whileLoop()
{
    var i=1;
    var result="Printed Using while loop:<br>";
    while(i<=10)
    {
        result+=i+" ";
        i++;
    }
    document.getElementById("output").innerHTML=result;
}
function doWhileLoop()
{
    var i=1;
    var result="Printed Using do-while loop:<br>"
    do {
        result+=i+" ";
        i++;
    }while(i<=10)
        document.getElementById("output").innerHTML=result;
}