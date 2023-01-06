// const a =[];
// a.push(5,8,9);
// console.log(a);

// const b =[2,3,67,89,34,56,78,98];
// b[4]=4;

// let d=10;
// console.log(b);
// console.log(b[300]);
// function c(undefined){
//     console.log(c - 1 );
//     console.log(c - a ); 
//     console.log(c - NaN );
//     console.log(c - undefined );
//     console.log(d-1 );
//     console.log(d-'a' );
//     console.log(d - undefined);//10-0
//     console.log(d + - 1 );
//     console.log('d' + 1 );
//     console.log(d - NaN );
//     console.log(d + 1 );
//     console.log(true - 1 );
//     console.log(false - 1 );
//     console.log(true + true );
//     console.log(true - 'a' );
//     console.log(true - undefined );//1-1 in true //1-0in false
//     console.log(true - NaN );
//     console.log(false - 'a' );
//     console.log(false - undefined );//0-1   in true //0-0 in false in argument and in paarameter undefined
//     console.log(false - NaN );
// }
// c(false)

// let arr=[1,2,3,4];
// let arr2=[5,6,7,8];

// let arr3=arr[0] + arr2[0];
// console.log(arr3);


// function fun1(a){
//     console.log(a);
//     return function fun2(){
//         console.log(a)
//         return function fun3(){
//             var a=5;
//             console.log(a);
//         }
      
//     }
   
// }
// fun1(1)()();

//hoisting
// console.log(getname)
// getname();
// console.log(a);
// var a=10;
// function getname(){
//     console.log('priya');
// }
// fun1();
// var fun1=()=>{
// console.log('vini');
// }
// fun1();

// //gatename1(); --prints undefined treat as variable only
// var gatename1=function (){
//     console.log('vinit');
// }
// gatename1();



a();

function a(){
    console.log('A called');
}

//b(); // it's error not a function
var b=function(){
    console.log('b called')
}
b();


let e1=()=>{
    console.log('hm')
}
e1();

let e2=function(){
    console.log('hm')
}();

const c=function(param1){
    return function xyz(){

    }
}
console.log(c());
//
//assign function as variable
const foo=()=>{
    console.log('in');
} 
foo();

//passing function as an argument
function hello(){
    return "Hello,";
}
function greeting(hellomsg,name){
    console.log(hellomsg()+name);
}
greeting(hello,'hie');

function greeting1(hello,name,lname){
console.log(hello()+name+ ' ' +lname);
}
greeting1(hello,'piyu','m')

function hmm(){
    return ()=>{
        console.log('ho');
    }
}
 var fun1= function(hie){
    console.log('hm');

 }
 function param(){
    return 'ho'

 }
function fun2(fun1,name,lname){
console.log(fun1()+name+' ' +lname);
}
fun2(fun1,'p','v')

function fun2(param,name,lname){
    console.log(param()+name+' ' +lname);
    }
    fun2(param,'p','v')




function a1(){
a2();
var b=20;
function a2(){
console.log(b);
}
}
a1();


// function importance
function oneplusavg(x,y){
    return Math.round(1+(x+y)/2);
    console.log('Done');
}
let a2=1;
let b2=4;
console.log('one plus average of a+b is '+oneplusavg(a2,b2));


const hello1=()=>{
console.log('hi');
return 'hm'

}
hello1();
let ho=hello1();
console.log(ho);

let subtract=function(a,b){
    let c=b-a;
    return c;
}
let xx=2;
let yy=1;
let sub1=subtract(xx,yy);
console.log(sub1);

function x3(y3){
console.log('hi x3');
let a = y3();
console.log(a);
}
function y3(){
console.log('hi y3');
return  10
}
x3(y3); 

let fact=1
for(let i=1;i<=3;i++){
    fact=fact*i
}
console.log(fact);



