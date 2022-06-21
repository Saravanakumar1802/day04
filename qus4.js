// 1.Write a loop that makes seven calls to console.log to output the following triangle:
for(let i='#';i.length<8; i +='#')
console.log(i)

//1. Declare four variables without assigning values and print them in console
var a ,b,c,d;
a=3,b=4,c=8,d=10;
console.log(a,b,c,d);

//2.How to get value of the variable myvar as output
var myvar= 1;
console.log("myvar");

//3.Declare variables to store your first name, last name, marital status, country and age in multiple lines
var details= {name:"xxx",
lastName:"yyy",
martialStatus:"single",
country:"india",
age:"24"}
console.log(details);

//4.Declare variables to store your first name, last name, marital status, country and age in a single line
var details= {name:"xxx",lastName:"yyy",martialStatus:"single",country:"india",age:"24"}
console.log(details);

//5.Declare variables and assign string, boolean, undefined and null data types
let aa="string"
let bb=(10>5)
let cc;
let dd= null;
console.log(aa,bb,cc,dd)

//6. Convert the string to integer
let string = '99';

plus=+string
num=Number(string)
str=parseInt(string)

//7. Write 6 statement which provide truthy & falsey values.

//Falsey values

false
0 
-0 
'', "", `` 
null
undefined
NaN

//Truely

// '0' (a string containing a single zero)
'false' 
// [] (an empty array)
// {} (an empty object)
// function(){}