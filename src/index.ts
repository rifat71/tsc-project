let age: number = 20;
if (age < 50)
    age += 20;
let array: number[] = [1, 2, 3];
let usear: [number, string] = [1, 'galib'];  //tuple
console.log(age)
// const small = 1;
// const medium = 2;
// const large = 3;
const enum Size { small = 1, medium, large };
let mySize: Size = Size.large;
console.log(mySize);

// function annotaion
function add(x: number, y: number): number {
    return x + y;
}

// to use optional parameter use ?, like year?: number
function calculateTax(income: number, year = 2023): number {
    if (income < 50_000)
        return income * 1.5;
    else if (year < 2023)
        return income * 2;
    return income * 2.5
}

let user: {
    name: string,
    id: number
} = { name: 'Galib', id: 1 };

//optional
let user2: {
    name?: string,
    id: number
} = { name: '', id: 1 };

//readonly
let user3: {
    name?: string,
    readonly id: number
} = { name: '', id: 1 };
// user3.id = 4; will give error as id is readonly

//function in object
let user4: {
    name?: string,
    readonly id: number,
    currentDate: (date: Date) => void
} = {
    name: '', 
    id: 1,
    currentDate: (date: Date) => {
        console.log(date);
    }
};

//using type alias
type User = {
    name?: string,
    readonly id: number,
    currentDate: (date: Date) => void
};
let user5: User = {
    name: '', 
    id: 1,
    currentDate: (date: Date) => {
        console.log(date);
    }
};

//union tyep
function kgToLbs(weight: number | string): number {
    if(typeof weight === 'number')
     return weight * 2.2
    else
     return parseInt(weight) * 2.2;
}

kgToLbs(20);
kgToLbs('20');


// intersection
type Draggable = {
    drag: () => void
};

type Resizeable = {
    resize: () => void,
};

type Widget = Draggable & Resizeable;

let textBox: Widget = {
    drag: () => {},
    resize: () => {}
};