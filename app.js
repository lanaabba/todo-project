'use strict';


let userName= prompt ("please enter your name ");
console.log(userName);
if ( userName){
    alert('hello ' +userName)
}
let gender =prompt ("please enter your gender ") ;
if (gender == 'male' || 'female' )

console .log(gender);

    else {alert (" your gender is wrong" )
}

let age = prompt( "enter your age" );
console .log(age);
 if ( age <=0){
 alert ("no age like this")}

 let skip= confirm ("skip the welcome massege?")
 console .log(skip)

 if ( 
    gender ==(" male" && skip==false)
    ){
        alert ("welcome , Mr. ", userName);
    }
else if  ( 
    gender ==(" female" && skip==false)
    ){
        alert ("welcome , Ms. ", userName);
    }
    else 
    {
        alert( "the gender is undefind");
    }









