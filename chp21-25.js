////////////q1////////////
var firstName=prompt("Enter your first name");
var lastName=prompt("Enter your last name");
var fullName=firstName.concat(lastName);
alert("Greetings "+fullName);
////////////q2////////////
var model=prompt("Enter your favourite mobile phone model");
document.write("My favourite phone is:"+model+"<br>Length of string: "+model.length);
////////////q3////////////
var string="Pakistani";
document.write("String: "+string+"<br>Index of 'n': "+string.indexOf('n'));
////////////q4////////////
var string="Hello World ";
document.write("String: "+string+"<br>Last Index of 'l': "+string.lastIndexOf('l'));
////////////q5////////////
var string="Pakistani";
document.write("String: "+string+"<br>Character at Index 3: "+string.charAt(3));
////////////q7////////////
var string="Hyderabad";
document.write("City: "+string+"<br>After replacement: "+string.replace("Hyder","Islam"));
////////////q8////////////
var message = 'Ali and Sami are best friends. They play cricket and football together.';
document.write("Message: "+message+"<br>After replacement: "+message.replace(/and/g,"&"));
////////////q9////////////
var value="472";
document.write("Value: "+value+"<br>Type:string<br>Value: "+parseInt(value)+"<br>Type:number");
////////////q10////////////
var input=prompt("Enter your input");
document.write("User input: "+input+"<br>Upper case:"+input.toUpperCase());
////////////q11////////////
var input=prompt("Enter your input");
document.write("User input: "+input+"<br>Upper case:"+input.charAt(0).toUpperCase()+ input.slice(1));
////////////q12////////////
var num = 35.36 ;
document.write("Number: "+num+"<br>Result: "+num.toString().replace(/\./g,""));
////////////q13////////////
var username=prompt("Enter your username");
for(i=0;i<username.length;i++)
    {
        if(username[i]=='@'||username[i]=='.'||username[i]==','||username[i]=='!')
            alert("Please enter a valid username");
    }
////////////q14////////////
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var item=prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?");
for(i=0;i<A.length;i++)
    {
        if(item.toLowerCase()==A[i])
          {  document.write(item+" is avaialble at index "+i+" in our bakery");
        break;}
        else
           { document.write("We are sorry."+item+"is not available in our bakery");
        break;}
    }
////////////q15////////////
var password= prompt("Enter your password");
document.write("Entered Password is: " + " " + password + "<br>");
for(var i=0; i<password.length; i++){
    if(password.charAt(i) ==[/a-z/g] && password.charAt(i) ==[/A-Z/g] && password.charAt(i) ==[/0-9/g] )
     {
            if(password.charAt(0)!=[0-9])
         {
                if(password[i].length>=6){
                document.write("Your password is correct"); 
             }
             else{
                 document.write("Your password must be have atleast 6 character");
                 break;
             }
         }
             else{
                 document.write("You have entered a number at beginning...Try Again");
                 break;
             }
           
     }
     else{
         document.write("Your password has no alphabet or number... Try Again");
         break;
     }
 }
////////////q16////////////
var uni = "University of karachi";
var b = uni.split("");
for(var a=0; a< b.length; a++){
document.write(b[a] +" <br>");
}

////////////q17////////////
var input = prompt("Enter your input");
var b = input.charAt(input.length-1)
document.write("User input: " + "" + input + "<br>");
document.write("Last character of input is : " + " " + b + "<br>");


////////////q18////////////
var str =  "The quick brown foxjumps over the lazy dog";
var str2=str.toLowerCase();
var s= str2.split(" ")
var word = "the";
var count=0;
document.write("Text: " + " "+str +"<br>");
for(var a = 0 ; a<s.length; a++){
if(s[a] === word){
count++;
}
}
document.write("There are " + " " + count + " " + "occurrence(s) of word 'the'  +<br>");