// conditional type :  je type condition er upor nirvorsheel

type A = null;
type B = undefined;

// type C = A extends number ? true : B extends undefined ? true : false;
type C = A extends null ? true : false;

type RichPeoplesVehicle = {
  bike: string;
  car: string;
  ship: string;
};

type CheckVehicle<T> = T extends keyof RichPeoplesVehicle ? true : false;

type HasBike = CheckVehicle<"tractor">;

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ## 1. Simple Explanation

// **Conditional Types** in TypeScript allow you to create a type based on a **condition**.

// 👉 It works like a ternary operator but for types:

// ```ts
// T extends U ? X : Y
// ```

// 👉 Meaning:

// * If `T` is assignable to `U` → use `X`
// * Otherwise → use `Y`

// 👉 Think:
// “Type decision based on a condition”

// ---

// ## 2. Key Concepts

// * Conditional type syntax: `T extends U ? A : B`
// * Type inference in conditions
// * Distributive conditional types (with unions)
// * `infer` keyword (advanced)
// * Type transformation logic

// ---

// ## 3. Interview Questions (Basic → Advanced)

// ### Q1: What is a conditional type?

// **Answer:**
// A type that chooses between two types based on a condition.

// ---

// ### Q2: What is the syntax of conditional types?

// **Answer:**
// `T extends U ? X : Y`

// ---

// ### Q3: What is distributive conditional type?

// **Answer:**
// When applied to a union type, it runs separately for each member.

// ---

// ### Q4: What is `infer` in conditional types?

// **Answer:**
// It is used to extract a type from another type.

// ---

// ### Q5: Where are conditional types used?

// **Answer:**
// In utility types, API typing, and advanced type transformations.

// ---

// ## 4. Sample Code

// ---

// ## 🔹 Basic Conditional Type

// ```ts id="a1k9xp"
// type IsString<T> = T extends string ? "YES" : "NO";

// // function calls (type usage)
// type A = IsString<string>;  // "YES"
// type B = IsString<number>;  // "NO"
// ```

// 👉 TypeScript decides based on condition

// ---

// ## 🔹 Function Example with Conditional Type

// ```ts id="b7m2xz"
// type CheckType<T> = T extends number ? "Number" : "Not Number";

// function check<T>(value: T): CheckType<T> {
//   return (typeof value === "number" ? "Number" : "Not Number") as CheckType<T>;
// }

// // function calls
// console.log(check(10));
// console.log(check("hello"));
// ```

// ---

// ## 🔹 Union Type (Distributive Behavior)

// ```ts id="c3n8qp"
// type ToString<T> = T extends string ? "string" : "other";

// type Result = ToString<string | number>;
// ```

// 👉 Result becomes:

// ```ts
// "string" | "other"
// ```

// ---

// ## 🔹 Extract Type Example

// ```ts id="d6v9lm"
// type ExtractArrayType<T> = T extends (infer U)[] ? U : T;

// function getType<T>(value: T): ExtractArrayType<T> {
//   return value as ExtractArrayType<T>;
// }

// // function calls
// console.log(getType([1, 2, 3]));
// console.log(getType("hello"));
// ```

// 👉 Extracts array item type

// ---

// ## 5. Real-World Examples

// ---

// ### Example 1: API Response Handling

// ```ts id="e8x2qp"
// type ApiResponse<T> = T extends { error: true }
//   ? { message: string }
//   : { data: T };

// function handleResponse<T>(res: ApiResponse<T>) {
//   console.log(res);
// }

// // function calls
// handleResponse({ data: { name: "Rayhan" } });
// ```

// 👉 Different structure based on condition

// ---

// ### Example 2: File Type Detection

// ```ts id="f5k7mn"
// type FileType<T> = T extends "jpg" | "png" ? "Image File" : "Other File";

// function checkFile<T>(ext: T): FileType<T> {
//   return (ext === "jpg" || ext === "png"
//     ? "Image File"
//     : "Other File") as FileType<T>;
// }

// // function calls
// console.log(checkFile("jpg"));
// console.log(checkFile("pdf"));
// ```

// ---

// ## 6. Common Mistakes

// ❌ Thinking conditional types run at runtime
// → They are compile-time only

// ❌ Confusing with `if-else` in JavaScript
// ❌ Not understanding union distribution behavior
// ❌ Overcomplicating simple types with conditional logic
// ❌ Misusing `infer` without understanding

// ---

// ## 7. Quick Summary

// * Conditional type = type-level if-else
// * Syntax: `T extends U ? X : Y`
// * Works at compile time only
// * Powerful for API typing & utilities
// * Used in advanced TypeScript patterns

// ---

// ## 8. Extra Real-World Insight

// 👉 In real backend systems:

// ```ts id="g2q8xz"
// type RoleCheck<T> = T extends "admin" ? "Full Access" : "Limited Access";

// function accessControl<T>(role: T): RoleCheck<T> {
//   return (role === "admin" ? "Full Access" : "Limited Access") as RoleCheck<T>;
// }

// // function calls
// console.log(accessControl("admin"));
// console.log(accessControl("user"));
// ```

// 👉 Used in:

// * Role-based systems
// * API response shaping
// * Utility libraries (like TypeScript built-ins)

// ---

// If you want next, I can explain **`infer` keyword in depth (very important for interviews like ReturnType, Parameters, Awaited)**.
