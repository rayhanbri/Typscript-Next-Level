// ? : ternary opearator : decision making
// ?? : nullish coalescing operator : null/undefined
// ?. optional chaining

const userAge = 21;

const biyeJonnoEligible = (age: number) => {
  // if (age >= 21) {
  //   console.log("you are eligible");
  // } else {
  //   console.log("you are not eligible ");
  // }
  const result = age >= 21 ? "your are eligible" : "you are not elibigve";

  console.log(result);
};

biyeJonnoEligible(20);

const userTheme = undefined;

const selectedTheme = userTheme ?? "light theme"; //for null and undefined otherwise it will not work .

console.log(selectedTheme);

const isAuthincated = null;

const resultwithTernary = isAuthincated ? isAuthincated : "you are guest";

const resultWithNullis = isAuthincated ?? "you are guest";

console.log({ resultWithNullis }, { resultwithTernary });

//optional chaining

const user: {
  address: {
    city: string;
    town: string;
    postalcode?: string;
  };
} = {
  address: {
    city: "dhaka",
    town: "bonani",
  },
};
const postalCode = user?.address?.postalcode;

// -----------------------------------------------------------------------------------------------------------------------------------------------

// Alright, this is about the **Nullish Coalescing Operator (`??`)** — very important and often confused with `||`.

// ---

// # 1. Simple Explanation

// ```ts
// userTheme ?? "light theme";
// ```

// 👉 Meaning:

// * If `userTheme` is **NOT null or undefined** → use `userTheme`
// * Otherwise → use `"light theme"`

// ---

// # 2. How it Works

// ```ts
// const theme = userTheme ?? "light theme";
// ```

// 👉 Equivalent logic:

// ```ts
// if (userTheme === null || userTheme === undefined) {
//   theme = "light theme";
// } else {
//   theme = userTheme;
// }
// ```

// ---

// # 3. Key Concept

// * `??` checks only:

//   * `null`
//   * `undefined`

// 👉 It does **NOT** treat these as false:

// * `""` (empty string)
// * `0`
// * `false`

// ---

// # 4. Interview Questions

// ---

// ### Q1: What is `??` operator?

// **Answer:**
// It returns the right-hand value only when the left-hand value is `null` or `undefined`.

// ---

// ### Q2: Difference between `??` and `||` (VERY IMPORTANT 🔥)

// ```ts
// const value1 = "" || "default";
// console.log(value1); // "default" ❌

// const value2 = "" ?? "default";
// console.log(value2); // "" ✅
// ```

// 👉 `||` treats empty string as false
// 👉 `??` does NOT

// ---

// # 5. Real-World Example

// ### Example (Theme handling 💡)

// ```ts
// const userTheme = "";
// const theme = userTheme ?? "light";

// console.log(theme); // "" (user preference kept)
// ```

// ---

// ### Backend Example (Your Project)

// ```ts
// const price = req.body.price ?? 0;
// ```

// 👉 If price missing → default 0

// ---

// # 6. Common Mistakes

// ---

// ❌ Using `||` when you actually need `??`

// ```ts
// const count = 0 || 10; // 10 ❌ wrong
// ```

// ---

// ✅ Correct:

// ```ts
// const count = 0 ?? 10; // 0 ✅
// ```

// ---

// # 7. Quick Practice

// ```ts
// const userTheme = null;

// const theme = userTheme ?? "light theme";

// console.log(theme); // light theme
// ```

// ---

// ## 🔥 Pro Tip (Interview Gold)

// 👉 Use `??` when:

// * You only want to handle **null/undefined**
// * You don’t want to lose valid values like `0`, `""`, `false`

// ---

// If you want next level 🔥
// I can explain:

// * optional chaining (`?.`)
// * `??` + `?.` combo (very common in real projects)

// Just tell me 👍
