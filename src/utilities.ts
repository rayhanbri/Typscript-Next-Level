// Utility Types

type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};

type ProductSummary = Pick<Product, "id" | "name" | "price">;

type ProductWithoutStock = Omit<Product, "stock" | "color">;

type ProductWithColor = Required<Product>;

const product: ProductWithColor = {
  id: 222,
  name: "Mouse",
  price: "20",
  stock: 100,
  color: "black",
};

type OptionProduct = Partial<Product>;
type ProductReadonly = Readonly<Product>;

// empty object er jonno type safety
const emptyObj: Record<string, unknown> = {};

const product1 = {
  id: 222,
  name: "Mouse",
  price: "20",
};

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ## 1. Simple Explanation

// **Utility Types in TypeScript** are built-in helper types that let you **transform existing types easily**.

// 👉 Instead of rewriting types, you modify them using ready-made tools.

// 👉 Think:
// “TypeScript shortcuts for changing object types”

// ---

// ## 2. Key Concepts

// * Built-in TypeScript helpers
// * Type transformation
// * Reusability
// * Common utilities:

//   * `Partial`
//   * `Required`
//   * `Readonly`
//   * `Pick`
//   * `Omit`
//   * `Record`

// ---

// ## 3. Interview Questions (Basic → Advanced)

// ### Q1: What are Utility Types?

// **Answer:**
// Predefined TypeScript types used to transform existing types.

// ---

// ### Q2: Why are utility types used?

// **Answer:**
// To avoid rewriting types and make code more reusable and flexible.

// ---

// ### Q3: What is the difference between Pick and Omit?

// **Answer:**

// * `Pick` → selects specific properties
// * `Omit` → removes specific properties

// ---

// ### Q4: What does Partial do?

// **Answer:**
// Makes all properties optional.

// ---

// ### Q5: What is Record used for?

// **Answer:**
// Creates an object type with specific keys and value types.

// ---

// ## 4. Sample Code

// ---

// ## 🔹 1. Partial (Make all optional)

// ```ts id="p1a9xz"
// interface User {
//   name: string;
//   age: number;
// }

// function updateUser(user: Partial<User>) {
//   console.log(user);
// }

// // function call
// updateUser({ name: "Rayhan" });
// ```

// 👉 All fields become optional

// ---

// ## 🔹 2. Required (Make all required)

// ```ts id="r8k2lm"
// interface User {
//   name?: string;
//   age?: number;
// }

// function createUser(user: Required<User>) {
//   console.log(user);
// }

// // function call
// createUser({ name: "Rahim", age: 25 });
// ```

// 👉 Even optional fields become required

// ---

// ## 🔹 3. Readonly (Cannot modify)

// ```ts id="w3n7qp"
// interface User {
//   name: string;
// }

// function printUser(user: Readonly<User>) {
//   console.log(user.name);
// }

// // function call
// printUser({ name: "Karim" });
// ```

// 👉 Prevents modification

// ---

// ## 🔹 4. Pick (Select properties)

// ```ts id="t6v9az"
// interface User {
//   name: string;
//   age: number;
//   email: string;
// }

// function showUser(user: Pick<User, "name" | "email">) {
//   console.log(user);
// }

// // function call
// showUser({ name: "Rayhan", email: "test@mail.com" });
// ```

// 👉 Only selected fields allowed

// ---

// ## 🔹 5. Omit (Remove properties)

// ```ts id="k9m2zx"
// interface User {
//   name: string;
//   age: number;
//   password: string;
// }

// function safeUser(user: Omit<User, "password">) {
//   console.log(user);
// }

// // function call
// safeUser({ name: "Rayhan", age: 25 });
// ```

// 👉 Removes sensitive data

// ---

// ## 🔹 6. Record (Key-value mapping)

// ```ts id="z2q8wb"
// type Role = "admin" | "user";

// type RoleAccess = Record<Role, boolean>;

// function checkAccess(roles: RoleAccess) {
//   console.log(roles);
// }

// // function call
// checkAccess({ admin: true, user: false });
// ```

// 👉 Useful for mappings

// ---

// ## 5. Real-World Examples

// ### Example 1: API Update (Partial)

// ```ts id="u7x3lm"
// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// function updateProduct(data: Partial<Product>) {
//   console.log(data);
// }

// // function call
// updateProduct({ price: 500 });
// ```

// 👉 Used in PATCH APIs

// ---

// ### Example 2: User Security (Omit)

// ```ts id="c4n9dp"
// interface User {
//   name: string;
//   email: string;
//   password: string;
// }

// function publicUser(user: Omit<User, "password">) {
//   console.log(user);
// }

// // function call
// publicUser({ name: "Rayhan", email: "test@mail.com" });
// ```

// 👉 Used for safe responses

// ---

// ## 6. Common Mistakes

// ❌ Using `any` instead of utility types
// ❌ Forgetting difference between `Pick` and `Omit`
// ❌ Overusing `Partial` everywhere
// ❌ Not using `Readonly` for immutable data
// ❌ Misusing `Record` with wrong key types

// ---

// ## 7. Quick Summary

// * Utility types = built-in type transformers
// * Reduce repetition
// * Improve safety & flexibility
// * Most important ones:

//   * `Partial`
//   * `Pick`
//   * `Omit`
//   * `Readonly`
//   * `Record`

// ---

// ## 8. Extra Real-World Insight

// 👉 In your MERN backend (very important use case):

// ```ts id="b6m2xz"
// interface Property {
//   id: string;
//   title: string;
//   price: number;
//   status: string;
// }

// // update API
// function updateProperty(data: Partial<Property>) {
//   console.log(data);
// }

// // function call
// updateProperty({ status: "verified" });
// ```

// 👉 Used in:

// * REST APIs (PATCH/PUT)
// * Admin dashboards
// * Role-based systems

// ---

// If you want next, I can give you **advanced utility types (`ReturnType`, `Parameters`, `Awaited`) + interview trick questions** which are often asked in senior interviews.
