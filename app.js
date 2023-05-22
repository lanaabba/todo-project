'use strict';


let userName = prompt("please enter your name ");
console.log(userName);
// if (userName) {
//     alert('hello ' + userName)
// }
let gender = prompt("please enter your gender ");
if (gender == 'male' || gender == 'female')

    console.log(gender);

// else {
//     alert(" your gender is wrong")
// }

let age = prompt("enter your age");
console.log(age);
if (age <= 0) {
    alert("no age like this");
}

let skip = confirm("skip the welcome massege?")
if ((skip) ==true){
prompt ("you skiped the welcome massage" );}
else{
if 
    (gender == "male" )
 {
    alert("welcome , Mr. "+ userName);
    console.log(gender);
}
else if 
   ( gender == "female" ) {
    alert(`welcome , Ms.  ${userName}`);
    console.log(gender);
}
else {
    alert("welcome , "+ userName);
    console.log('undefined');
}
}

let userSport = prompt ( "do you love sport (Yes / No)?");

let children = prompt ( "do you love children (Yes / No)?");

let softWare = prompt ( "do you love javaScript (Yes / No)?");
  let answers =[userSport , children ,softWare ];


function theUserAnswer()
{
    for (let i=0; i<answers.length; i++){
    if (answers[i] === ""){
       answers[i] ="invalid";
    }
    { console.log(answers[i]);} 
}
}
theUserAnswer()






 












