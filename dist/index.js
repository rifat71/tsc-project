"use strict";
let age = 20;
if (age < 50)
    age += 20;
let array = [1, 2, 3];
let usear = [1, 'galib'];
console.log(age);
;
let mySize = 3;
console.log(mySize);
function add(x, y) {
    return x + y;
}
function calculateTax(income, year = 2023) {
    if (income < 50000)
        return income * 1.5;
    else if (year < 2023)
        return income * 2;
    return income * 2.5;
}
let user = { name: 'Galib', id: 1 };
let user2 = { name: '', id: 1 };
let user3 = { name: '', id: 1 };
let user4 = {
    name: '',
    id: 1,
    currentDate: (date) => {
        console.log(date);
    }
};
let user5 = {
    name: '',
    id: 1,
    currentDate: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(20);
kgToLbs('20');
//# sourceMappingURL=index.js.map