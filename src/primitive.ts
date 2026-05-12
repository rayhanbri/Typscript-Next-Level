let userName: string = "Rayhan";

// userName = 12;

let isAdmin: boolean = false;

// all data types of typescript

///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// # Primitive and Non-Primitive Data Types in JavaScript & TypeScript

// Both JavaScript and TypeScript have two main categories of data types:

// 1. Primitive Data Types
// 2. Non-Primitive Data Types

// ---

// # 1. Primitive Data Types

// Primitive data types store **single/simple values**.

// They are:

// * immutable (cannot be changed directly)
// * stored by value

// ---

// ## 4. Undefined

// A variable declared but not assigned a value.

// ```ts id="m6x3s9"
// let city: undefined = undefined;

// console.log(city);
// ```

// ---

// ## 5. Null

// Represents intentional empty value.

// ```ts id="y3w1p8"
// let data: null = null;

// console.log(data);
// ```

// ---

// ## 6. BigInt

// Used for very large integers.

// ```ts id="h2r7v4"
// let bigNumber: bigint = 123456789123456789n;

// console.log(bigNumber);
// ```

// ---

// ## 7. Symbol

// Used for unique identifiers.

// ```ts id="e4u8b6"
// let uniqueId: symbol = Symbol("id");

// console.log(uniqueId);
// ```

// ---

// # Primitive Data Types Summary

// | Type      | Example     |
// | --------- | ----------- |
// | string    | `"hello"`   |
// | number    | `10`        |
// | boolean   | `true`      |
// | undefined | `undefined` |
// | null      | `null`      |
// | bigint    | `100n`      |
// | symbol    | `Symbol()`  |

// ---

// # Important Characteristics of Primitive Types

// ## Stored by Value

// ```ts id="s9p2d1"
// let a = 10;
// let b = a;

// b = 20;

// console.log(a); // 10
// console.log(b); // 20
// ```

// Changing `b` does not affect `a`.

// ---

// # 2. Non-Primitive Data Types

// Non-primitive types can store:

// * multiple values
// * complex data

// They are:

// * mutable
// * stored by reference

// ---

// # Types of Non-Primitive Data Types

// ## 1. Object

// Stores key-value pairs.

// ```ts id="w7k5r2"
// const user = {
//   name: "Rayhan",
//   age: 22,
// };

// console.log(user);
// ```

// ---

// ## 2. Array

// Stores multiple values in order.

// ```ts id="n3q8f4"
// let numbers: number[] = [1, 2, 3, 4];

// console.log(numbers);
// ```

// ---

// ## 3. Function

// Functions are also objects in JavaScript.

// ```ts id="c6z1j9"
// function greet(name: string) {
//   return `Hello ${name}`;
// }

// console.log(greet("Rayhan"));
// ```

// ---

// ## 4. Date

// Built-in object for handling dates.

// ```ts id="p4t9m7"
// const today = new Date();

// console.log(today);
// ```

// ---

// # Important Characteristics of Non-Primitive Types

// ## Stored by Reference

// ```ts id="u8y2l6"
// let person1 = {
//   name: "Rayhan",
// };

// let person2 = person1;

// person2.name = "Rahim";

// console.log(person1.name); // Rahim
// ```

// Both variables point to the same memory reference.

// ---

// # Main Difference Between Primitive and Non-Primitive

// | Primitive           | Non-Primitive                  |
// | ------------------- | ------------------------------ |
// | Stores single value | Stores multiple/complex values |
// | Immutable           | Mutable                        |
// | Stored by value     | Stored by reference            |
// | Faster              | Slightly slower                |
// | Simple data         | Complex data                   |

// ---

// # Real-World Example

// ## Primitive Example

// ```ts id="d7x1c3"
// let price = 500;
// ```

// Just one simple value.

// ---

// ## Non-Primitive Example

// ```ts id="g5m8q2"
// const product = {
//   name: "Laptop",
//   price: 50000,
// };
// ```

// Multiple related values together.

// ---

// # JavaScript vs TypeScript Difference

// In JavaScript:

// ```js id="b4v6n9"
// let age = 20;
// ```

// No explicit type.

// ---

// In TypeScript:

// ```ts id="r2k7w5"
// let age: number = 20;
// ```

// Type is clearly defined.

// TypeScript provides better type safety.

// ---

// # Common Interview Questions

// ## Q: What are primitive data types?

// **Answer:**
// Primitive data types store simple single values like string, number, and boolean.

// ---

// ## Q: What are non-primitive data types?

// **Answer:**
// Non-primitive data types store complex or multiple values like objects and arrays.

// ---

// ## Q: Difference between primitive and non-primitive?

// **Answer:**
// Primitive types are stored by value, while non-primitive types are stored by reference.

// ---

// ## Q: Is array primitive or non-primitive?

// **Answer:**
// Array is a non-primitive data type.

// ---

// ## Q: Are functions objects in JavaScript?

// **Answer:**
// Yes. Functions are special types of objects.

// ---

// # Common Mistakes

// ## Mistake 1

// Thinking `null` is an object.

// ```js id="q3f8h1"
// typeof null
// ```

// Returns `"object"` because of an old JavaScript bug.

// ---

// ## Mistake 2

// Confusing reference copy with value copy.

// Objects and arrays copy references, not actual values.

// ---

// # Final Summary

// ## Primitive Types

// * string
// * number
// * boolean
// * undefined
// * null
// * bigint
// * symbol

// They store simple values.

// ---

// ## Non-Primitive Types

// * object
// * array
// * function
// * date

// They store complex data and are reference-based.
