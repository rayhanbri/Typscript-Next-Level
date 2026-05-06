//arrow function , normal function

function add(num1: number, num2: number): number {
  //rturn type
  return num1 + num2;
}

add(2, 3);

// Arrow Function

const addArrow = (num1: number, numb2: number) => num1 + numb2;

addArrow(1, 2);

// Object function Method

const poorUser = {
  name: "rayhan",
  balance: 0,
  //   addBalance(value: number) {
  //     return this.balance + value;
  //   },

  addBalance(value: number): number {
    // what it this
    const totalBalance = this.balance + value;
    return totalBalance;
  },
};

poorUser.addBalance(1000);

// call back function
//what is callbackfunction

const arr: number[] = [1, 3, 2];

const sqrArray = arr.map((element: number): number => element * element);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Alright, let’s break **Functions in TypeScript (`function.ts`)** in your interview mentor format 👇

// ---

// # 1. Simple Explanation

// A **function** is a reusable block of code that performs a task.

// In **TypeScript**, functions are more powerful because:

// * You can define **types for parameters**
// * You can define **return types**
// * It helps prevent bugs early

// 👉 Example:

// ```ts
// function add(a: number, b: number): number {
//   return a + b;
// }
// ```

// ---

// # 2. Key Concepts

// * Function declaration
// * Arrow function
// * Parameter types
// * Return types
// * Optional parameters (`?`)
// * Default parameters
// * Rest parameters (`...`)
// * Void return type
// * Function type / signature

// ---

// # 3. Interview Questions (Basic → Advanced)

// ---

// ### Q1: What is a function?

// **Answer:**
// A function is a reusable block of code used to perform a specific task.

// ---

// ### Q2: Why use TypeScript in functions?

// **Answer:**
// To ensure type safety for parameters and return values.

// ---

// ### Q3: Function with types

// ```ts
// function multiply(a: number, b: number): number {
//   return a * b;
// }

// console.log(multiply(2, 3));
// ```

// ---

// ### Q4: Arrow function

// ```ts
// const divide = (a: number, b: number): number => {
//   return a / b;
// };

// console.log(divide(10, 2));
// ```

// ---

// ### Q5: Optional parameter

// ```ts
// function greet(name: string, age?: number) {
//   if (age) {
//     return `${name} is ${age} years old`;
//   }
//   return `Hello ${name}`;
// }

// console.log(greet("Rayhan"));
// ```

// ---

// ### Q6: Default parameter

// ```ts
// function power(base: number, exponent: number = 2): number {
//   return base ** exponent;
// }

// console.log(power(3)); // 9
// ```

// ---

// ### Q7: Rest parameters (IMPORTANT 🔥)

// ```ts
// function sum(...numbers: number[]): number {
//   return numbers.reduce((acc, num) => acc + num, 0);
// }

// console.log(sum(1, 2, 3, 4)); // 10
// ```

// ---

// ### Q8: Function returning void

// ```ts
// function logMessage(msg: string): void {
//   console.log(msg);
// }

// logMessage("Hello TS");
// ```

// ---

// ### Q9: Function type / signature

// ```ts
// let addNumbers: (a: number, b: number) => number;

// addNumbers = (x, y) => x + y;

// console.log(addNumbers(5, 6));
// ```

// ---

// # 4. Real-World Examples

// ### Example 1 (Frontend)

// ```ts
// function handleClick(id: number): void {
//   console.log(`Clicked item ${id}`);
// }

// handleClick(1);
// ```

// ---

// ### Example 2 (Backend - Your Project 💡)

// ```ts
// type User = {
//   name: string;
//   email: string;
// };

// function createUser(user: User): User {
//   return user;
// }

// console.log(createUser({ name: "Rayhan", email: "rayhan@gmail.com" }));
// ```

// ---

// # 5. Common Mistakes

// ❌ Not defining return type (bad practice)

// ```ts
// function add(a: number, b: number) {
//   return a + b;
// }
// ```

// ---

// ❌ Wrong parameter type

// ```ts
// add(2, "3"); // error
// ```

// ---

// ❌ Confusing `void` and `return`

// ```ts
// function test(): void {
//   return 10; // ❌ error
// }
// ```

// ---

// # 6. function.ts (Practice File)

// ```ts
// // function.ts

// // Basic function
// function add(a: number, b: number): number {
//   return a + b;
// }
// console.log(add(2, 3));

// // Arrow function
// const subtract = (a: number, b: number): number => a - b;
// console.log(subtract(5, 2));

// // Optional parameter
// function greet(name: string, age?: number): string {
//   return age ? `${name} is ${age}` : `Hello ${name}`;
// }
// console.log(greet("Rayhan"));

// // Default parameter
// function multiply(a: number, b: number = 2): number {
//   return a * b;
// }
// console.log(multiply(4));

// // Rest parameter
// function total(...nums: number[]): number {
//   return nums.reduce((sum, n) => sum + n, 0);
// }
// console.log(total(1, 2, 3, 4));

// // Void function
// function printMessage(msg: string): void {
//   console.log(msg);
// }
// printMessage("TypeScript is awesome");

// // Function type
// let operation: (x: number, y: number) => number;

// operation = (x, y) => x + y;
// console.log(operation(10, 5));
// ```

// ---

// ## 🔥 Pro Tip (Interview Gold)

// 👉 Always define **return types** in TypeScript
// 👉 Prefer **arrow functions** for cleaner code
// 👉 Use **rest parameters** for dynamic inputs

// ---

// If you want next level 🔥
// I can cover:

// * function overloading
// * generics in functions (VERY IMPORTANT)
// * higher-order functions (real interview favorite)

// Just tell me 👍
