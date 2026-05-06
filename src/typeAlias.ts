// what is typeAlias

const user1: {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
} = {
  id: 123,
  name: {
    firstName: "Mr.",
    lastName: "X",
  },
  gender: "male",
  contactNo: "0177",
  address: {
    division: "Chattogram",
    city: "Chattogram",
  },
};

// type alias

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 123,
  name: "rayhan",
};

type Name = string;

const myName: Name = "rayhan";

// function

type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2) => num1 + num2;

// -----------------------------------------------------------------------------------------------------------------------------------------------

// Alright, let’s break **Type Alias in TypeScript** in your interview mentor format 👇

// ---

// # 1. Simple Explanation

// A **Type Alias** lets you create a **custom name for a type**.

// 👉 Instead of repeating complex types again and again, you define it once and reuse it.

// ```ts
// type User = {
//   name: string;
//   age: number;
// };
// ```

// 👉 Now `User` works like a reusable type.

// ---

// # 2. Key Concepts

// * `type` keyword
// * Reusable custom types
// * Works with:

//   * objects
//   * unions
//   * primitives
//   * functions
//   * tuples
// * Can combine multiple types

// ---

// # 3. Interview Questions (Basic → Advanced)

// ---

// ### Q1: What is a type alias?

// **Answer:**
// A type alias is a way to give a custom name to any type in TypeScript.

// ---

// ### Q2: Why use type alias?

// **Answer:**
// To improve readability, reusability, and maintainability.

// ---

// ### Q3: Object type alias

// ```ts
// type User = {
//   name: string;
//   age: number;
// };

// const user1: User = {
//   name: "Rayhan",
//   age: 25,
// };

// console.log(user1);
// ```

// ---

// ### Q4: Primitive type alias

// ```ts
// type ID = string | number;

// const userId: ID = "abc123";
// console.log(userId);
// ```

// ---

// ### Q5: Function type alias (IMPORTANT 🔥)

// ```ts
// type Add = (a: number, b: number) => number;

// const add: Add = (x, y) => x + y;

// console.log(add(2, 3));
// ```

// ---

// ### Q6: Array type alias

// ```ts
// type Numbers = number[];

// const nums: Numbers = [1, 2, 3];
// console.log(nums);
// ```

// ---

// ### Q7: Union & Intersection

// ```ts
// type Admin = {
//   role: "admin";
// };

// type User = {
//   name: string;
// };

// // Intersection
// type AdminUser = Admin & User;

// const admin: AdminUser = {
//   name: "Rayhan",
//   role: "admin",
// };

// console.log(admin);
// ```

// ---

// # 4. Real-World Examples

// ### Example 1 (Frontend)

// ```ts
// type Props = {
//   title: string;
//   price: number;
// };

// function Card({ title, price }: Props) {
//   console.log(title, price);
// }

// Card({ title: "Flat", price: 1000 });
// ```

// ---

// ### Example 2 (Backend - Your MERN Project 💡)

// ```ts
// type Property = {
//   title: string;
//   price: number;
//   location: string;
// };

// const property1: Property = {
//   title: "Apartment",
//   price: 5000,
//   location: "Dhaka",
// };

// console.log(property1);
// ```

// ---

// # 5. Common Mistakes

// ---

// ❌ Confusing `type` with `interface`
// 👉 Both are similar but not always interchangeable

// ---

// ❌ Trying to redeclare type

// ```ts
// type User = { name: string };
// // type User = { age: number }; ❌ error
// ```

// ---

// ❌ Overusing inline types instead of alias

// ```ts
// const user: { name: string; age: number } = { ... }; // ❌ messy
// ```

// ---

// # 6. Practice File (typeAlias.ts)

// ```ts
// // typeAlias.ts

// // Object type
// type User = {
//   name: string;
//   age: number;
// };

// const user1: User = {
//   name: "Rayhan",
//   age: 25,
// };
// console.log(user1);

// // Primitive union
// type ID = string | number;

// const id1: ID = 101;
// console.log(id1);

// // Function type
// type Multiply = (a: number, b: number) => number;

// const multiply: Multiply = (a, b) => a * b;
// console.log(multiply(3, 4));

// // Array type
// type StringArray = string[];

// const names: StringArray = ["A", "B", "C"];
// console.log(names);

// // Intersection
// type A = { a: number };
// type B = { b: number };

// type AB = A & B;

// const obj: AB = { a: 1, b: 2 };
// console.log(obj);
// ```

// ---

// ## 🔥 Pro Tip (Interview Gold)

// 👉 Use `type` when:

// * You need unions (`|`)
// * You need intersections (`&`)
// * You define function types

// 👉 Use `interface` when:

// * You want extensibility (`extends`)
// * OOP-style design

// ---

// If you want next level 🔥
// I can explain:

// * `type vs interface` (very common interview question)
// * mapped types
// * conditional types

// Just tell me 👍
