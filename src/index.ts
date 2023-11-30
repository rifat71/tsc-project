let age: number = 20;
if(age <50)
 age+=20;
let array: number[] = [1,2,3];
let usear: [number, string] = [1, 'galib'];  //tuple
console.log(age)
// const small = 1;
// const medium = 2;
// const large = 3;
const enum Size {small = 1, medium, large};
let mySize: Size = Size.large;
console.log(mySize);

// function annotaion
function add(x: number, y: number): number{
    return x+y;
}

// to use optional parameter use ?  
function calculateTax(income: number, year = 2023): number{
    if(income < 50_000)
     return income * 1.5;
    else if(year < 2023)
     return income * 2;
    return income * 2.5
}
