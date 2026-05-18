// constraint : strict rules deya

type Stuent = { id: number; name: string; dateOfBirth: string; class: string };

const addStudentToCourse = <T extends Stuent>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 123,
  name: "Mezba",
  hasPen: true,
};

const student2 = {
  id: 321,
  name: "Jhankar Mahbub",
  hasCar: true,
  isMarried: true,
};

const student3 = {
  id: 444,
  name: "Abdur Rakib",
  hasWatch: true,
  dateOfBirth: "20-20-2020",
  class: "1",
};

const result = addStudentToCourse(student2);
console.log(result);

type bro = { isGood: boolean; name: string; role: number };

const myBro = <T extends bro>(bro: T) => bro;

myBro({ isGood: true, name: "rayhan", role: 1 });

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ## 1. Simple Explanation

// **Constraints in Generics** (TypeScript) are used to **limit what types a generic can accept**.

// 👉 Without constraint → any type allowed
// 👉 With constraint → only specific types allowed

// You use the keyword **`extends`**.

// 👉 Think:

// ---

// ## 2. Key Concepts

// * `extends` keyword
// * Restricting generic types
// * Type safety
// * Structural typing (based on properties)
// * `keyof` (advanced constraint)
// * Preventing runtime errors

// ---

// ## 3. Interview Questions (Basic → Advanced)

// ### Q1: What are generic constraints?

// **Answer:**
// // “Generic is flexible, but constraint puts rules on it”

// ---

// ### Q2: Why use constraints?

// **Answer:**
// To ensure the generic has required properties or behavior.

// ---

// ### Q3: What does `T extends Something` mean?

// **Answer:**
// It means `T` must follow the structure of `Something`.

// ---

// ### Q4: Can constraints use interfaces?

// **Answer:**
// Yes, commonly used with interfaces.

// ---

// ### Q5: What is `keyof` constraint?

// **Answer:**
// It ensures a value is a key of a given object type.

// ---

// ## 4. Sample Code

// ### 🔹 Basic Constraint Example

// ```ts id="c1x9zr"
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

// // function calls
console.log(getLength("Hello")); // string has length
console.log(getLength([1, 2, 3])); // array has length
// ```

// 👉 Works because both have `length`

// ---

// ### 🔹 Using Interface as Constraint

// ```ts id="p4k8lm"
interface User {
  name: string;
}

function printName<T extends User>(user: T) {
  console.log(user.name);
}

// // function call
printName({ name: "Rayhan", age: 25 });
// ```

// 👉 Extra properties allowed, but `name` is required

// ---

// ### 🔹 `keyof` Constraint (Important)

// ```ts id="z7w3yt"
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

// // function call
const user = { name: "Rayhan", age: 25 };

console.log(getProperty(user, "name"));
// ```

// 👉 Prevents invalid keys

// ---

// ### 🔹 Without Constraint (Problem)

// ```ts id="b2m6qa"
function getLengthBad<T>(item: T): number {
  // ❌ Error: TypeScript doesn't know if length exists
  // return item.length;
  return 0;
}

// // function call
console.log(getLengthBad(123));
// ```

// 👉 This is why constraints are needed

// ---

// ## 5. Real-World Examples

// ### Example 1: API Validation

// ```ts id="n5v8ru"
interface HasId {
  id: number;
}

function processData<T extends HasId>(data: T) {
  console.log("ID:", data.id);
}

// // function call
processData({ id: 1, name: "Product" });
// ```

// 👉 Ensures every object has an `id`

// ---

// ### Example 2: Safe Object Access

// ```ts id="x3d9kp"
function safeAccess<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

// // function call
const product = { title: "Book", price: 100 };

console.log(safeAccess(product, "price"));
// ```

// 👉 Prevents accessing wrong keys

// ---

// ## 6. Common Mistakes

// ❌ Forgetting to use constraints when needed
// → leads to errors

// ❌ Over-restricting types
// → reduces flexibility

// ❌ Not using `keyof` for object keys
// → unsafe access

// ❌ Using `any` instead of proper constraints

// ---

// ## 7. Quick Summary

// * Constraints = rules for generics
// * Use `extends`
// * Ensures required properties exist
// * Makes code safer and more predictable

// ---

// ## 8. Extra Real-World Insight

// 👉 In backend (like your Express + Prisma project):

// ```ts id="q9w2xe"
// function createEntity<T extends { id: number }>(entity: T) {
//   return entity.id;
// }

// // function call
// console.log(createEntity({ id: 101, name: "Room" }));
// ```

// 👉 Useful for:

// * Database models
// * API validation
// * Service layer logic

// ---

// If you want next, I can give you **`keyof`, `typeof`, mapped types (VERY important for interviews)** with real backend examples.
