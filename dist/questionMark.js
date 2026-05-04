"use strict";
// ? : ternary opearator : decision making
// ?? : nullish coalescing operator : null/undefined
// ?. optional chaining
Object.defineProperty(exports, "__esModule", { value: true });
const userAge = 21;
const biyeJonnoEligible = (age) => {
    if (userAge >= 21) {
        console.log("you are eligible");
    }
    else {
        console.log("you are not eligible ");
    }
};
biyeJonnoEligible(21);
//# sourceMappingURL=questionMark.js.map