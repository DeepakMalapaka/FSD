function ArmstrongNumber()
{
    var userInput=prompt("Enter the number to test for armstrong number:");
    const num=parseInt(userInput);
    var n=0,temp=num,count=0;
    var sum=0;
    while(temp!==0)
    {
        temp=Math.floor(temp/10);
        count++;
    }
    temp=num;
    while(temp!==0)
    {
        const rem=temp%10;
        sum+=Math.pow(rem,count);
        temp=Math.floor(temp/10);
    }
    var reply="";
    if(sum===num)
    {
        reply=num+" is a armstrong number.";
    }
    else
    {
        reply=num+" is not a armstrong number.";
    }
    document.getElementById("output").innerHTML=`${reply}`;
}