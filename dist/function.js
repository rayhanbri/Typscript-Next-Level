"use strict";
//arrow function , normal function
Object.defineProperty(exports, "__esModule", { value: true });
function add(num1, num2) {
    //rturn type
    return num1 + num2;
}
add(2, 3);
// Arrow Function
const addArrow = (num1, numb2) => num1 + numb2;
addArrow(1, 2);
// Object function Method
const poorUser = {
    name: "rayhan",
    balance: 0,
    //   addBalance(value: number) {
    //     return this.balance + value;
    //   },
    addBalance(value) {
        const totalBalance = this.balance + value;
        return totalBalance;
    },
};
poorUser.addBalance(1000);
// call back function
const arr = [1, 3, 2];
const sqrArray = arr.map((element) => element * element);
//# sourceMappingURL=function.js.map