const a =[];
a.push(5,8,9);
console.log(a);

const b =[2,3,67,89,34,56,78,98];
b[4]=4;

let d=10;
console.log(b);
console.log(b[300]);
function c(undefined){
    console.log(c - 1 );
    console.log(c - a ); 
    console.log(c - NaN );
    console.log(c - undefined );
    console.log(d-1 );
    console.log(d-'a' );
    console.log(d - undefined);//10-0
    console.log(d + - 1 );
    console.log('d' + 1 );
    console.log(d - NaN );
    console.log(d + 1 );
    console.log(true - 1 );
    console.log(false - 1 );
    console.log(true + true );
    console.log(true - 'a' );
    console.log(true - undefined );//1-1 in true //1-0in false
    console.log(true - NaN );
    console.log(false - 'a' );
    console.log(false - undefined );//0-1   in true //0-0 in false in argument and in paarameter undefined
    console.log(false - NaN );
}
c(false)