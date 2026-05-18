// Generic Function

// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithUserObj = (value: { id: number; name: string }) => {
//   return [value];
// };

const createArrrayWithGeneric = <T>(value: T) => {
  return [value];
};

const arrString = createArrrayWithGeneric("Apple");
const arrNum = createArrrayWithGeneric(222);
const arrObj = createArrrayWithGeneric({
  id: 123,
  name: "Next Level",
});

// tuple

const createArrayWithTuple = (param1: string, param2: string) => [
  param1,
  param2,
];

// generic na kore normal function likhlei tho hoye jai naki ??tao keno user korchi ??

const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [
  param1,
  param2,
];

const res1 = createArrayTupleWithGeneric("Mezba", false);
const res2 = createArrayTupleWithGeneric(222, { name: "Mezba" });

//

const addStudentToCourse = <T>(studentInfo: T) => {
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

const result = addStudentToCourse(student2);
console.log(result);

// console.log(...student2)

const sum = <X, Y>(paramas1: X, params2: Y) => {
  [paramas1, params2];
};
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ## 1. Simple Explanation

// **Generics with functions** in **TypeScript** allow you to write a function **once** and use it with **different data types**.

// 👉 Instead of fixing a type (`string`, `number`), you use a placeholder like `<T>`.

// * Normal function → works with one type
// * Generic function → works with many types

// 👉 Think:
// “One function, multiple types, still type-safe”

// ---

// ## 2. Key Concepts

// * Generic parameter (`<T>`)
// * Type inference (TypeScript can guess type)
// * Reusability
// * Type safety
// * Multiple generics (`<T, U>`)
// * Constraints (`extends`)

// ---

// ## 3. Interview Questions (Basic → Advanced)

// ### Q1: What is a generic function?

// **Answer:**
// A function that uses type parameters (`<T>`) to work with multiple types.

// ---

// ### Q2: Why use generics in functions?

// **Answer:**
// To avoid duplicate functions and keep type safety.

// ---

// ### Q3: What is type inference in generics?

// **Answer:**
// TypeScript automatically detects the type without explicitly passing `<T>`.

// ---

// ### Q4: Can we use multiple generic types?

// **Answer:**
// Yes, like `<T, U>`.

// ---

// ### Q5: What are constraints in generic functions?

// **Answer:**
// They restrict allowed types using `extends`.

// ---

// ## 4. Sample Code

// ### 🔹 Basic Generic Function

// ```ts id="g1n3rf"
function identity<T>(value: T): T {
  return value;
}

// // function calls
console.log(identity<string>("Hello"));
console.log(identity<number>(123));
// ```

// ---

// ### 🔹 Type Inference (No need to pass `<T>`)

// ```ts id="k82paz"
function identity<T>(value: T): T {
  return value;
}

// // function calls
console.log(identity("Auto Detect"));
console.log(identity(999));
// ```

// ---

// ### 🔹 Multiple Generics

// ```ts id="r8t4bx"
function combine<T, U>(a: T, b: U) {
  return { a, b };
}

// // function call
console.log(combine<string, number>("Age", 25));
// ```

// ---

// ### 🔹 Generic with Constraint

// ```ts id="m5q2we"
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

// // function calls
console.log(getLength("Hello"));
console.log(getLength([1, 2, 3]));
// ```

// ---

// ### 🔹 Generic Function with Array

// ```ts id="v7c1ds"
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

// // function calls
console.log(getFirst<number>([10, 20, 30]));
console.log(getFirst<string>(["a", "b", "c"]));
// ```

// ---

// ## 5. Real-World Examples

// ### Example 1: API Response Handler

// ```ts id="q2x8mn"
function handleApi<T>(data: T): T {
  return data;
}

// // function call
const user = handleApi<{ name: string }>({ name: "Rayhan" });
console.log(user);
// ```

// 👉 Same function works for any API response

// ---

// ### Example 2: Reusable Utility Function

// ```ts id="y5k8pl"
function wrapInArray<T>(value: T): T[] {
  return [value];
}

// // function calls
console.log(wrapInArray(5));
console.log(wrapInArray("hello"));
// ```

// 👉 Used in many real projects

// ---

// ## 6. Common Mistakes

// ❌ Using `any` instead of generics
// → loses type safety

// ❌ Overcomplicating generics (`<T, U, V, X>`)
// → hard to read

// ❌ Forgetting constraints
// → runtime bugs

// ❌ Not using type inference
// → unnecessary complexity

// ---

// ## 7. Quick Summary

// * Generic function = reusable + flexible
// * `<T>` = type placeholder
// * Avoid duplicate functions
// * Keeps strong typing

// ---

// ## 8. Extra Real-World Insight

// 👉 Backend example (like your Node/Express project):

// ```ts id="t4h9uz"
function createResponse<T>(data: T, success: boolean) {
  return { data, success };
}

// // function call
console.log(createResponse({ id: 1, name: "Property" }, true));
// ```

// 👉 Useful for:

// * API responses
// * Database results
// * Service layer

// ---

// If you want next, I can give you **advanced generics interview problems (very common in senior-level interviews)** like `keyof`, mapped types, etc.
