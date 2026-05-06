//array, object

let bazarlist: string[] = ["tomato", "alu"];

// bazarlist.push(12);

let mixedArray: (string | number)[] = ["apple", 3, "alu"];

mixedArray.push(true);

// two only, touple

let coordinates: [number, number] = [1, 2, 2];

let couple: [string, number] = ["rayhan", 12];

//object types
//literal types 
//access modified 
//optional type 

const user: {
  Organization: "Programming Hero";  //literal type 
  readonly salary : number;   //access modifier 
  fristName: string;
  middlenName?: string; //optional type
  lastName: string;
} = {
  fristName: "Rayhan",
  lastName: "bro ",
  Organization,
  salary:12
};

user. 



// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
// Alright, let’s break **Primitive vs Non-Primitive Data Types (JavaScript + TypeScript)** in your interview mentor format 👇

// ---

// # 1. Simple Explanation

// ### ✅ Primitive Data Types

// * These are **basic, single values**
// * Stored **by value**
// * Immutable (cannot be changed directly)

// 👉 Example:

// ```ts
// let name: string = "Rayhan";
// ```

// ---

// ### ✅ Non-Primitive Data Types

// * These are **complex structures (collection of values)**
// * Stored **by reference**
// * Mutable (can be modified)

// 👉 Example:

// ```ts
// const user = { name: "Rayhan", age: 25 };
// ```

// ---

// # 2. Key Concepts

// ### Primitive Types (JS + TS)

// * `string`
// * `number`
// * `boolean`
// * `null`
// * `undefined`
// * `symbol`
// * `bigint`

// ---

// ### Non-Primitive Types

// * `object`
// * `array`
// * `function`
// * `class`
// * `tuple` (TS)
// * `interface` (TS)

// ---

// # 3. Interview Questions (Basic → Advanced)

// ---

// ### Q1: What are primitive data types?

// **Answer:**
// Primitive data types are basic data types that store a single value and are immutable.

// ---

// ### Q2: What are non-primitive data types?

// **Answer:**
// Non-primitive types are complex data structures that can store multiple values and are mutable.

// ---

// ### Q3: What is the main difference?

// **Answer:**

// | Feature    | Primitive      | Non-Primitive |
// | ---------- | -------------- | ------------- |
// | Storage    | By value       | By reference  |
// | Mutability | Immutable      | Mutable       |
// | Example    | string, number | object, array |

// ---

// ### Q4: Explain with example (IMPORTANT 🔥)

// ```ts
// // Primitive (copy by value)
// let a = 10;
// let b = a;

// b = 20;

// console.log(a); // 10 (unchanged)
// console.log(b); // 20
// ```

// ---

// ```ts
// // Non-primitive (reference)
// const obj1 = { name: "Rayhan" };
// const obj2 = obj1;

// obj2.name = "Changed";

// console.log(obj1.name); // Changed 😱
// ```

// ---

// ### Q5: Is array primitive or non-primitive?

// **Answer:**
// Array is **non-primitive** (object type).

// ---

// ### Q6: Is function primitive?

// **Answer:**
// No, function is a **non-primitive (object)** in JavaScript.

// ---

// # 4. Real-World Examples

// ### Example 1 (Frontend)

// ```ts
// const isLoggedIn: boolean = true; // primitive
// const user = { name: "Rayhan" }; // non-primitive
// ```

// ---

// ### Example 2 (Backend - Your MERN Project 💡)

// ```ts
// // primitive
// const email: string = "user@gmail.com";

// // non-primitive
// const user = {
//   name: "Rayhan",
//   role: "admin"
// };
// ```

// ---

// # 5. Common Mistakes

// ❌ Thinking array is primitive
// 👉 It's actually an object

// ---

// ❌ Confusing null as object

// ```ts
// typeof null === "object" // JS bug
// ```

// ---

// ❌ Assuming copy creates new object

// ```ts
// const a = { x: 1 };
// const b = a; // not a copy
// ```

// ---

// # 6. Nonprimitive.ts (Practice File)

// Here’s a clean TypeScript file you can use 👇

// ```ts
// // Nonprimitive.ts

// // Primitive Types
// let str: string = "Hello";
// let num: number = 100;
// let isActive: boolean = true;
// let nothing: null = null;
// let notDefined: undefined = undefined;

// // Non-Primitive Types

// // Object
// const user: { name: string; age: number } = {
//   name: "Rayhan",
//   age: 25,
// };

// // Array
// const numbers: number[] = [1, 2, 3, 4];

// // Tuple (TS)
// const person: [string, number] = ["Rayhan", 25];

// // Function
// function greet(name: string): string {
//   return `Hello ${name}`;
// }

// // Function call
// console.log(greet("Rayhan"));

// // Reference behavior
// const obj1 = { value: 10 };
// const obj2 = obj1;

// obj2.value = 50;

// console.log(obj1.value); // 50 (shared reference)
// ```

// ---

// ## 🔥 Pro Tip (Interview Gold)

// 👉 **Primitive = stack memory**
// 👉 **Non-primitive = heap memory (reference)**

// ---

// If you want next level:

// * Deep vs shallow copy
// * Spread operator vs structuredClone
// * Memory visualization (very common interview question)

// Just tell me 👍

