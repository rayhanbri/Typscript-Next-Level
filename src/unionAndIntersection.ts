//union types

type UserRole = "admin" | "user" | "guest";

const getDashboarad = (role: UserRole) => {
  if (role === "admin") {
    return "Admin dashboard";
  } else if (role === "user") {
    return "user dashboard";
  } else {
    return "guest dasboard v ";
  }
};

//intersection &

type Employee = {
  id: string;
  name: string;
  phoneNO: string;
};

type Manager = {
  description: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const chowdhury: EmployeeManager = {
  name: "rayhan",
  id: "123",
  phoneNO: "012",
  description: "heelo",
  teamSize:2

};


// -------------------------------------------------------------------------------------------------------------------------------------------------------



// Alright, let’s break **Union Types in TypeScript** in your interview mentor format 👇

// ---

// # 1. Simple Explanation

// A **Union Type** allows a variable to hold **multiple possible types**.

// 👉 Instead of only one type, you say:
// “this value can be **this OR that**”

// ```ts
// let id: string | number;
// ```

// 👉 Now `id` can be:

// * `"abc"` ✅
// * `123` ✅

// ---

// # 2. Key Concepts

// * `|` (pipe operator)
// * Multiple possible types
// * Type narrowing (very important 🔥)
// * Works with:

//   * primitives
//   * objects
//   * literals

// ---

// # 3. Interview Questions (Basic → Advanced)

// ---

// ### Q1: What is a union type?

// **Answer:**
// A union type allows a variable to have more than one type using the `|` operator.

// ---

// ### Q2: Basic example

// ```ts
// let value: string | number;

// value = "Hello";
// console.log(value);

// value = 100;
// console.log(value);
// ```

// ---

// ### Q3: Union with function (IMPORTANT 🔥)

// ```ts
// function printId(id: string | number) {
//   console.log(id);
// }

// printId("abc");
// printId(123);
// ```

// ---

// ### Q4: Problem without narrowing ⚠️

// ```ts
// function printLength(value: string | number) {
//   // console.log(value.length); ❌ error
// }
// ```

// 👉 TypeScript doesn’t know if it's string or number.

// ---

// ### Q5: Type narrowing (VERY IMPORTANT 🔥)

// ```ts
// function printLength(value: string | number) {
//   if (typeof value === "string") {
//     console.log(value.length);
//   } else {
//     console.log(value.toFixed(2));
//   }
// }

// printLength("Rayhan");
// printLength(10);
// ```

// ---

// ### Q6: Union with literal types

// ```ts
// type Status = "success" | "error" | "loading";

// let state: Status;

// state = "success"; // ✅
// ```

// ---

// ### Q7: Union with objects

// ```ts
// type Admin = { role: "admin"; access: boolean };
// type User = { role: "user"; name: string };

// type Person = Admin | User;

// const p1: Person = { role: "admin", access: true };
// const p2: Person = { role: "user", name: "Rayhan" };

// console.log(p1, p2);
// ```

// ---

// # 4. Real-World Examples

// ### Example 1 (API response 💡)

// ```ts
// type ApiResponse = "success" | "error";

// function handleResponse(status: ApiResponse) {
//   console.log(status);
// }

// handleResponse("success");
// ```

// ---

// ### Example 2 (Your MERN Project)

// ```ts
// type Role = "admin" | "agent" | "user";

// const role: Role = "admin";
// console.log(role);
// ```

// ---

// # 5. Common Mistakes

// ---

// ❌ Using union but not narrowing

// ```ts
// function test(val: string | number) {
//   // val.toUpperCase(); ❌ error
// }
// ```

// ---

// ❌ Confusing union with intersection

// ```ts
// type A = { a: number };
// type B = { b: number };

// type AB = A | B; // NOT both, only one
// ```

// ---

// ❌ Invalid assignment

// ```ts
// type Status = "success" | "error";

// let s: Status = "pending"; // ❌ error
// ```

// ---

// # 6. Practice File (union.ts)

// ```ts
// // union.ts

// // Basic union
// let id: string | number;

// id = "abc";
// console.log(id);

// id = 123;
// console.log(id);

// // Function with union
// function show(value: string | number): void {
//   console.log(value);
// }
// show("Hello");
// show(50);

// // Type narrowing
// function process(value: string | number) {
//   if (typeof value === "string") {
//     console.log(value.toUpperCase());
//   } else {
//     console.log(value.toFixed(2));
//   }
// }
// process("rayhan");
// process(10);

// // Literal union
// type Role = "admin" | "agent" | "user";

// const userRole: Role = "admin";
// console.log(userRole);
// ```

// ---

// ## 🔥 Pro Tip (Interview Gold)

// 👉 `|` means **OR**
// 👉 Always use **type narrowing** with unions
// 👉 Literal unions are powerful for **strict values**

// ---

// If you want next level 🔥
// I can explain:

// * intersection types (`&`)
// * discriminated unions (VERY IMPORTANT for interviews)
// * real API response handling pattern

// Just tell me 👍

