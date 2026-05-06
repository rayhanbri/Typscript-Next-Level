//spread operator

const friends = ["rayhim", "shamim"];

const schoolFriends = ["akash", "arman"];

const colleageFriends = ["rocky", "socky"];

// friends.push(schoolFriends)

friends.push(...schoolFriends);

const user = { name: "Mezba", phoneNo: "0170000000" };

const otherInfo = { hobby: "outing", favouriteColor: "Black" };

const userInfo = { ...user, ...otherInfo };

console.log(userInfo);

// rest opeartor

const sendInvite = (...friends: string[]) => {
  friends.forEach((friend: string) =>
    console.log(`Send invitation to ${friend}`),
  );
};

sendInvite("pintu", "cinthu", "bulbul", "chulbul", "mezba");

// --------------------------------------------------------------------------------------------------------------------------------------------------------------

// Alright, let’s break **Spread Operator (`...`)** in interview mentor style 👇

// ---

// # 1. Simple Explanation

// The **spread operator (`...`)** is used to **expand or unpack values** from:

// * arrays
// * objects
// * iterables

// 👉 It helps you **copy, merge, or pass values easily**

// ---

// # 2. Key Concepts

// * Spread syntax: `...`
// * Works with:

//   * arrays
//   * objects
//   * function arguments
// * Creates **shallow copy**
// * Improves immutability (important in React/TS)

// ---

// # 3. Interview Questions (Basic → Advanced)

// ---

// ### Q1: What is the spread operator?

// **Answer:**
// The spread operator (`...`) expands elements of an array or object into individual elements.

// ---

// ### Q2: Spread with array

// ```ts
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];

// console.log(arr2);
// ```

// 👉 Output:

// ```
// [1, 2, 3]
// ```

// ---

// ### Q3: Merge arrays (IMPORTANT 🔥)

// ```ts
// const a = [1, 2];
// const b = [3, 4];

// const result = [...a, ...b];

// console.log(result);
// ```

// 👉 Output:

// ```
// [1, 2, 3, 4]
// ```

// ---

// ### Q4: Spread with object

// ```ts
// const user = { name: "Rayhan" };
// const updatedUser = { ...user, age: 25 };

// console.log(updatedUser);
// ```

// 👉 Output:

// ```
// { name: "Rayhan", age: 25 }
// ```

// ---

// ### Q5: Copy vs Reference (Very Important ⚠️)

// ```ts
// const obj1 = { name: "Rayhan" };
// const obj2 = { ...obj1 };

// obj2.name = "Changed";

// console.log(obj1.name); // Rayhan ✅ (not affected)
// ```

// ---

// ### Q6: Spread in function arguments

// ```ts
// function sum(a: number, b: number, c: number) {
//   return a + b + c;
// }

// const nums = [1, 2, 3];

// console.log(sum(...nums));
// ```

// ---

// ### Q7: Spread vs Rest operator

// | Spread                 | Rest                        |
// | ---------------------- | --------------------------- |
// | Expands values         | Collects values             |
// | Used in arrays/objects | Used in function parameters |

// ---

// Example:

// ```ts
// // Rest
// function total(...nums: number[]) {
//   return nums.reduce((a, b) => a + b, 0);
// }

// // Spread
// const numbers = [1, 2, 3];
// total(...numbers);
// ```

// ---

// # 4. Real-World Examples

// ### Example 1 (React state update 💡)

// ```ts
// const user = { name: "Rayhan", age: 25 };

// const updated = { ...user, age: 26 };
// ```

// 👉 Avoids mutation (very important)

// ---

// ### Example 2 (Backend - your project)

// ```ts
// const property = {
//   title: "Flat",
//   price: 1000,
// };

// const updatedProperty = {
//   ...property,
//   price: 1200,
// };
// ```

// ---

// # 5. Common Mistakes

// ❌ Thinking it creates deep copy
// 👉 It’s **shallow copy only**

// ```ts
// const obj1 = { nested: { x: 1 } };
// const obj2 = { ...obj1 };

// obj2.nested.x = 100;

// console.log(obj1.nested.x); // 100 😱
// ```

// ---

// ❌ Forgetting order matters

// ```ts
// const a = { x: 1 };
// const b = { x: 2 };

// const result = { ...a, ...b };

// console.log(result.x); // 2 (last wins)
// ```

// ---

// # 6. Quick Practice (spread.ts)

// ```ts
// // spread.ts

// // Array copy
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];
// console.log(arr2);

// // Merge arrays
// const merged = [...arr1, 4, 5];
// console.log(merged);

// // Object copy
// const user = { name: "Rayhan" };
// const user2 = { ...user, age: 25 };
// console.log(user2);

// // Function spread
// function add(a: number, b: number, c: number) {
//   return a + b + c;
// }

// const nums = [1, 2, 3];
// console.log(add(...nums));
// ```

// ---

// ## 🔥 Pro Tip (Interview Gold)

// 👉 Spread = **expand values**
// 👉 Rest = **collect values**
// 👉 Spread creates **shallow copy only**

// ---

// If you want next level 🔥
// I can show:

// * Deep copy vs shallow copy (very common interview trap)
// * Structured cloning vs spread
// * Real React state pitfalls

// Just tell me 👍
