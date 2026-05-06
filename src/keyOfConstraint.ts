// keyof : type operator

type RichPeoplesVehicle = {
  car: string; // key: value
  bike: string;
  cng: string;
};

// union type and string literal type

type MyVehicle1 = "bike" | "car" | "cng";
type Myvehicle2 = keyof RichPeoplesVehicle;

const myVehicle: Myvehicle2 = "ship";

// key of constraints

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user: User = {
  id: 222, // key: value
  name: "Mezba",
  address: {
    city: "ctg",
  },
};

// //const myId = user.id;
// const myId = user["id"];
// const myName = user["name"];
// const address = user["address"];

//console.log({ myId, myName, address });

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

// const result1 = getPropertyFromObj(user, "emni");
// console.log(result);

const product = {
  brand: "HP",
};

const student = {
  id: 123,
  class: "four",
};

const result2 = getPropertyFromObj(product, "brand");
const result3 = getPropertyFromObj(student, "id");

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ## 1. Simple Explanation

// **`keyof` constraint** in TypeScript is used to ensure that a value is a **valid key of an object**.

// 👉 It is usually written like:

// ```ts
// K extends keyof T
// ```

// 👉 Meaning:

// * `T` = object type
// * `K` = must be a key of `T`

// 👉 Think:
// “Only allow keys that actually exist in the object”

// ---

// ## 2. Key Concepts

// * `keyof` operator
// * Generic constraints (`extends`)
// * Type safety for object keys
// * Preventing invalid property access
// * Indexed access (`obj[key]`)

// ---

// ## 3. Interview Questions (Basic → Advanced)

// ### Q1: What is `keyof` in TypeScript?

// **Answer:**
// It creates a union of all keys of an object type.

// ---

// ### Q2: What is `keyof` constraint?

// **Answer:**
// It restricts a generic type to only accept keys of another type.

// ---

// ### Q3: Why use `K extends keyof T`?

// **Answer:**
// To ensure safe access to object properties.

// ---

// ### Q4: What problem does it solve?

// **Answer:**
// Prevents accessing non-existing keys (runtime errors).

// ---

// ### Q5: Can `keyof` be used with generics?

// **Answer:**
// Yes, commonly used with generics for safe object handling.

// ---

// ## 4. Sample Code

// ### 🔹 Basic `keyof` Example

// ```ts id="a1k9xp"
// type User = {
//   name: string;
//   age: number;
// };

// type UserKeys = keyof User;

// // function to show keys
// function printKey(key: UserKeys) {
//   console.log(key);
// }

// // function calls
// printKey("name");
// printKey("age");
// ```

// ---

// ### 🔹 `keyof` Constraint with Generic Function (Important)

// ```ts id="k8z2lw"
// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key];
// }

// // function call
// const user = { name: "Rayhan", age: 25 };

// console.log(getProperty(user, "name")); // ✅ valid
// // console.log(getProperty(user, "email")); ❌ invalid
// ```

// 👉 TypeScript prevents wrong keys

// ---

// ### 🔹 Without `keyof` (Problem)

// ```ts id="n7x4qb"
// function getPropertyBad(obj: any, key: string) {
//   return obj[key];
// }

// // function call
// console.log(getPropertyBad({ name: "Rayhan" }, "email"));
// ```

// 👉 No error → but unsafe (undefined at runtime)

// ---

// ### 🔹 Using `keyof` with Interface

// ```ts id="u5c9rt"
// interface Product {
//   title: string;
//   price: number;
// }

// function getProductValue<T, K extends keyof T>(obj: T, key: K) {
//   console.log(obj[key]);
// }

// // function call
// getProductValue<Product, "price">({ title: "Book", price: 100 }, "price");
// ```

// ---

// ## 5. Real-World Examples

// ### Example 1: Safe API Data Access

// ```ts id="x8v2me"
// function getField<T, K extends keyof T>(data: T, field: K) {
//   return data[field];
// }

// // function call
// const apiData = { id: 1, name: "Room" };

// console.log(getField(apiData, "name"));
// ```

// 👉 Prevents accessing wrong fields

// ---

// ### Example 2: Dynamic Table Columns

// ```ts id="p3w7zs"
// function getColumn<T, K extends keyof T>(row: T, column: K) {
//   return row[column];
// }

// // function call
// const row = { id: 1, title: "House" };

// console.log(getColumn(row, "title"));
// ```

// 👉 Used in reusable table components

// ---

// ## 6. Common Mistakes

// ❌ Not using `keyof` when accessing dynamic keys
// → unsafe code

// ❌ Using `string` instead of `keyof T`
// → loses type safety

// ❌ Overcomplicating generics
// → reduces readability

// ❌ Ignoring TypeScript errors and forcing with `as`

// ---

// ## 7. Quick Summary

// * `keyof` = gets all keys of a type
// * `K extends keyof T` = restrict key to valid ones
// * Prevents runtime errors
// * Very important for real-world apps

// ---

// ## 8. Extra Real-World Insight

// 👉 Backend (Express / Prisma style):

// ```ts id="q6n2ly"
// function pickField<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key];
// }

// // function call
// const property = { id: 1, location: "Dhaka", price: 50000 };

// console.log(pickField(property, "price"));
// ```

// 👉 Useful for:

// * Filtering data
// * Selecting DB fields
// * Building reusable services

// ---

// If you want next, I can explain **mapped types (`Partial`, `Pick`, `Record`)** — these are **top interview questions** and heavily used in real projects.
