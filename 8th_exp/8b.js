function enterNumber()
{
    var userInput=prompt("Enter the number:");
    const num=parseInt(userInput);
    var reply;
    switch(num) {
        case 1:reply="SUNDAY";
            break;
        case 2:reply="MONDAY";
            break;
        case 3:reply="TUESDAY";
            break;
        case 4:reply="WEDNESDAY";
            break;
        case 5:reply="THURSDAY";
            break;
        case 6:reply="FRIDAY";
            break;
        case 7:reply="SUNDAY";
            break;
        default:reply="Enter valid number (1-7) only:";
            break;
    }
    document.getElementById("output").innerHTML=`${reply}`;
}