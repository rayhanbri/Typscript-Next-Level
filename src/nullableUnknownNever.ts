// nullable types

const getUser = (input: string | null) => {
  if (input) {
    console.log(`From DB: ${input}`);
  } else {
    console.log("From DB: ALL USER");
  }
};

getUser(null);

//unknown

const discountCalculator = (input: unknown) => {
  if (typeof input === "number") {
    const discountedPrice = input * 0.1;
    console.log(discountedPrice);
  } else if (typeof input === "string") {
    // array destructuring
    const [discountedPrice] = input.split(" ");
    // conerting into number
    console.log(Number(discountedPrice) * 0.1);
  } else {
    console.log("wrong Input");
  }
};

discountCalculator(100);
discountCalculator("100 TK");
discountCalculator(null);

// void

const throwError = (msg: string): never => {
  throw new Error(msg);
};

throwError("Error...");

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// # 🔹 Nullable in TypeScript (simple + practical)

// ---

// ## 1. Simple Explanation

// **Nullable means a value can be `null` (or sometimes `undefined`) in TypeScript.**

// 👉 In short:

// > A variable is *nullable* if it is allowed to have no value.

// ---

// ## 2. How to declare nullable types

// ### ✅ Using union type (most common)

// ```ts id="x9k3q1"
// let userName: string | null;
// ```

// 👉 Meaning:

// * string value ✅
// * OR null ✅

// ---

// ### ✅ With undefined too (common in real apps)

// ```ts id="p2m7v8"
// let age: number | null | undefined;
// ```

// ---

// ## 3. Real Example

// ```ts id="k4n8q2"
// let user: string | null = null;

// user = "Rayhan";

// console.log(user);
// ```

// ---

// ## 4. Why nullable is used?

// 👉 Real-world data is not always available:

// * API data missing
// * Optional form fields
// * Database values not set
// * Loading states

// ---

// ## 5. Interview Questions

// ---

// ### Q1: What is nullable type?

// **Answer:**
// A nullable type allows a variable to hold `null` as a valid value.

// ---

// ### Q2: Why do we use nullable types?

// **Answer:**
// To handle cases where data may not exist or is intentionally empty.

// ---

// ### Q3: Example of nullable type

// ```ts id="b6v1x9"
// let data: string | null = null;
// data = "Hello";
// ```

// ---

// ### Q4: Difference between `null` and `undefined` (important 🔥)

// | null                    | undefined           |
// | ----------------------- | ------------------- |
// | intentional empty value | not assigned yet    |
// | set by developer        | default JS behavior |

// ---

// ## 6. Real-world Example (VERY IMPORTANT 💡)

// ### API response handling

// ```ts id="f8r3z2"
// type User = {
//   name: string;
//   email: string | null;
// };

// const user: User = {
//   name: "Rayhan",
//   email: null,
// };
// ```

// ---

// ### DOM / frontend example

// ```ts id="q7t1w5"
// const inputValue: string | null = null;
// ```

// ---

// ## 7. Common Mistakes

// ---

// ❌ Using value without checking null

// ```ts id="m3k9p2"
// let user: string | null = null;

// console.log(user.length); // ❌ error
// ```

// ---

// ✅ Fix with check

// ```ts id="t6v4r8"
// if (user !== null) {
//   console.log(user.length);
// }
// ```

// ---

// ## 8. Optional chaining alternative (modern way 🔥)

// ```ts id="y1p5q8"
// let user: string | null = null;

// console.log(user?.length); // safe
// ```

// ---

// ## 🔥 Pro Tip (Interview Gold)

// 👉 Use nullable when:

// * Data may not exist yet
// * API values are optional
// * Form fields are optional

// 👉 Always combine with:

// * `null checks`
// * `optional chaining (?.)`
// * `??` default values

// ---

// ## 🚀 Quick Summary

// ```ts
// string        → always value
// string | null → value OR nothing
// string | undefined → not assigned yet
// string | null | undefined → fully optional
// ```

// ---

// If you want next level 🔥
// I can explain:

// * `strictNullChecks` in TypeScript
// * difference between `null`, `undefined`, `void`
// * real backend API safe handling pattern

// Just tell me 👍
