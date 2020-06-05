var city=prompt("Enter city name");
if(city=="Karachi")
    alert("Welcome to city of lights");

var gender=prompt("Enter your gender");
if(gender=="male")
    alert("Good Morning Sir");
else if(gender=="female")
    alert("Good Morning Ma'am");


var color=prompt("Enter the color of road traffic signal");
if(color=="red")
    alert("Must Stop");
else if(color=="yellow")
    alert("Ready to move");
else if(color=="green")
    alert("Move now");


var fuel=+prompt("Enter the remaining fuel in the car");
if(fuel<0.25)
    alert("Please refill the fuel in your car");

var a = 4; 
if (++a === 5)
{ alert("given condition for variable a is true"); }

var b = 82; 
if (b++ === 83)
{ alert("given condition for variable b is true"); }

var c = 12; 
if (c++ === 13)
{ alert("condition 1 is true"); } 
if (c === 13)
{ alert("condition 2 is true"); } 
if (++c < 14)
{ alert("condition 3 is true"); } 
if(c === 14)
{ alert("condition 4 is true"); }

var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost)
{ alert("The cost equals"); }

if (true)
{ alert("True"); } 
if (false)
{ alert("False"); }

if("car" < "cat")
{ alert("car is smaller than cat"); }

var marks=+prompt("Enter marks obtained in 3 subjects");
var totalMarks=+prompt("Enter total marks");
var per=(marks/totalMarks)*100,grade,remarks;
if(per>=80)
    {
        grade="A-one";
        remarks="Excellent";
    }
else if(per>=70)
    {
        grade="A";
        remarks="Good";
    }
else if(per>=60)
    {
        grade="B";
        remarks="You need to improve";
    }
else
    {
        grade="Fail";
        remarks="Sorry";
    }
document.write("Marks Sheet<br>Total marks: "+totalMarks+"<br>Marks obtained: "+marks+"<br>Percentage: "+per+"%<br>Grade: "+grade+"<br>Remarks: "+remarks );

var num=3;
var guess=+prompt("Guess the secret number");

if(guess==num)
    alert("Bingo!Correct answer");
else if(guess+1==num)
    alert("Close enough to the correct answer");
if(guess%3==0)
    alert("The number is divisible by 3");
if(guess%2==0)
    alert("The number is even");
else
    alert("The number is odd");
    
var temp=+prompt("Enter the temperature");
if(temp>40)
    alert("It is too hot outside.");
else if(temp>30)
    alert("The Weather today is Normal.");
else if(temp>20)
    alert("Today's Weather is cool.");
else
    alert("OMG!Today's weather is so Cool.");

var num1=+prompt("Enter First number");
var num2=+prompt("Enter Second number");
var opr=prompt("Enter the operation");
if(opr=='+')
    alert(num1+num2);
else if(opr=='-')
    alert(num1-num2);
else if(opr=='*')
    alert(num1*num2);
else if(opr=='/')
    alert(num1/num2);
else
    alert(num1%num2);


