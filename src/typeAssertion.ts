// type assertion or narrowing
//What is basically it means

let anything: any;

anything = "Mezba";

// console.log("helllllo", typeof anything);

// (anything as number).

const kgToGMConverter = (
  input: string | number,
): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Converted output is: ${Number(value) * 1000}`;
  }
};

const result1 = kgToGMConverter(2) as number;

console.log({ result1 });

const result2 = kgToGMConverter("2 kg") as string;

console.log({ result2 });

// this is important explore this

type CustomError = {
  meesage: string;
};

try {
} catch (err) {
  console.log((err as CustomError).meesage);
}

// ## 1. Simple Explanation

// **Type Assertion** and **Type Narrowing** are used in **TypeScript** to deal with variable types safely.

// * **Type Assertion** = *You tell TypeScript what the type is* (even if it’s unsure).
// * **Type Narrowing** = *TypeScript automatically figures out the more specific type* based on conditions.

// 👉 Think like this:

// * Assertion = “Trust me, I know the type.”
// * Narrowing = “Let me check and figure out the type safely.”

// ---

// ## 2. Key Concepts

// * TypeScript
// * Union Types (`string | number`)
// * Type Guards (`typeof`, `instanceof`, `in`)
// * Control Flow Analysis
// * `as` keyword (type assertion)
// * Type Safety

// ---

// ## 3. Interview Questions (Basic → Advanced)

// ### Q1: What is Type Assertion in TypeScript?

// **Answer:**
// Type assertion is a way to manually tell TypeScript the type of a variable using `as` keyword.

// ---

// ### Q2: What is Type Narrowing?

// **Answer:**
// Type narrowing is the process where TypeScript reduces a variable’s type to a more specific one using checks like `typeof`.

// ---

// ### Q3: Difference between Type Assertion and Type Narrowing?

// **Answer:**

// * Assertion → manual, no runtime check
// * Narrowing → automatic, based on conditions (safe)

// ---

// ### Q4: What are common type narrowing techniques?

// **Answer:**

// * `typeof`
// * `instanceof`
// * `in` operator
// * Equality checks (`===`)

// ---

// ### Q5: Why is type assertion risky?

// **Answer:**
// Because it bypasses TypeScript’s safety checks and can cause runtime errors if wrong.

// ---

// ## 4. Sample Code

// ### 🔹 Type Assertion Example

// ```ts
let value: unknown = "Hello World";

// asserting type
let strLength = (value as string).length;

console.log(strLength);
// ```

// 👉 Here, TypeScript trusts you without checking.

// ---

// ### 🔹 Type Narrowing Example

// ```ts
function printLength(value: string | number) {
  if (typeof value === "string") {
    console.log(value.length); // string
  } else {
    console.log(value.toFixed(2)); // number
  }
}
// ```

// 👉 TypeScript safely narrows the type based on condition.

// ---

// ### 🔹 Another Narrowing Example (`in`)

// ```ts
type User = { name: string };
type Admin = { role: string };

function printInfo(person: User | Admin) {
  if ("name" in person) {
    console.log(person.name);
  } else {
    console.log(person.role);
  }
}
// ```

// ---

// ## 5. Real-World Examples

// ### Example 1: API Response Handling

// ```ts
// let response: unknown = fetchData();

// // Assertion (unsafe)
// let data = response as { name: string };
// ```

// 👉 If API changes → crash

// ---

// ### Example 2: Form Input Handling (Narrowing)

// ```ts
function handleInput(input: string | number) {
  if (typeof input === "string") {
    console.log(input.toUpperCase());
  }
}
// ```

// 👉 Safe and reliable

// ---

// ## 6. Common Mistakes

// ❌ Overusing type assertion (`as`)
// → makes code unsafe

// ❌ Assuming type without checking
// → runtime errors

// ❌ Ignoring union types
// → leads to bugs

// ❌ Not using narrowing when needed
// → TypeScript can’t help you

// ---

// ## 7. Quick Summary

// * Use **Type Assertion** when you are 100% sure
// * Prefer **Type Narrowing** for safer code
// * Narrowing = best practice in real-world apps

// ---

// If you want, I can give you **advanced interview questions (tricky + real project scenarios)** on this topic next.
