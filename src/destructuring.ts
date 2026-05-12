// object destructuring
// array destructuring

const user = {
  id: 123,
  name: {
    firstName: "Mezbaul",
    middleName: "Abedin",
    lastName: "forhan",
  },
  gender: "male",
  favouritecolor: "black",
};

// const myfavourtieColor = user.favouritecolor

// destructuring

// const { favouriteColor } = user;

// name alias in object

// const { favouriteColor: myfavouritecolor } = user;

// const {
//   favouriteColor: myfavouritecolor,
//   name: { middleName: mymiddleName },
// } = user;

const friends = ["karim", "Rahim", "Mahin"];

const BestFriend = friends[1];

// const [, B] = friends;

const [, , B] = friends;

// ---------------------------------------------------------------------------------------------------------------------------------------------------------

// Alright, let’s break **Destructuring** in interview mentor style 👇

// ---

// # 1. Simple Explanation

// **Destructuring** is a way to **extract values from arrays or objects** and assign them to variables easily.

// 👉 Instead of writing:

// ```ts
// const user = { name: "Rayhan", age: 25 };
// const name = user.name;
// ```

// 👉 You can write:

// ```ts
// const { name } = user;
// ```

// ---

// # 2. Key Concepts

// * Object destructuring
// * Array destructuring
// * Renaming variables
// * Default values
// * Nested destructuring
// * Function parameter destructuring

// ---

// # 3. Interview Questions (Basic → Advanced)

// ---

// ### Q1: What is destructuring?

// **Answer:**
// Destructuring is a syntax to extract values from objects or arrays into variables.

// ---

// ### Q2: Object destructuring

// ```ts
// const user = { name: "Rayhan", age: 25 };

// const { name, age } = user;

// console.log(name, age);
// ```

// ---

// ### Q3: Rename variable

// ```ts
// const user = { name: "Rayhan" };

// const { name: userName } = user;

// console.log(userName);
// ```

// ---

// ### Q4: Default value

// ```ts
// const user = { name: "Rayhan" };

// const { age = 18 } = user;

// console.log(age); // 18
// ```

// ---

// ### Q5: Array destructuring

// ```ts
// const numbers = [10, 20, 30];

// const [a, b] = numbers;

// console.log(a, b); // 10 20
// ```

// ---

// ### Q6: Skip values

// ```ts
// const numbers = [1, 2, 3];

// const [first, , third] = numbers;

// console.log(first, third);
// ```

// ---

// ### Q7: Nested destructuring (IMPORTANT 🔥)

// ```ts
const user2 = {
  name: "Rayhan",
  address: {
    city: "Chattogram",
  },
};

const {
  address: { city },
} = user2;

console.log(city);
// ```

// ---

// ### Q8: Destructuring in function parameters

// ```ts
// type User = {
//   name: string;
//   age: number;
// };

// function printUser({ name, age }: User): void {
//   console.log(`${name} is ${age}`);
// }

// printUser({ name: "Rayhan", age: 25 });
// ```

// ---

// # 4. Real-World Examples

// ### Example 1 (React props 💡)

// ```ts
// function Card({ title, price }: { title: string; price: number }) {
//   console.log(title, price);
// }
// ```

// ---

// ### Example 2 (Backend - your project)

// ```ts
// const reqBody = {
//   title: "Flat",
//   price: 1000,
// };

// const { title, price } = reqBody;
// ```

// ---

// # 5. Common Mistakes

// ---

// ❌ Wrong variable name

// ```ts
// const { name } = user;
// console.log(user.name); // ❌ unnecessary
// ```

// ---

// ❌ Undefined error in nested destructuring

// ```ts
// const user = {};
// const { address: { city } } = user; // ❌ crash
// ```

// ✅ Fix:

// ```ts
const { address2 } = user || {};
// ```

// ---

// ❌ Confusing array vs object

// ```ts
// const [name] = user; // ❌ wrong (user is object)
// ```

// ---

// # 6. Practice File (destructuring.ts)

// ```ts
// // destructuring.ts

// // Object
// const user = { name: "Rayhan", age: 25 };
// const { name, age } = user;
// console.log(name, age);

// // Rename
// const { name: userName } = user;
// console.log(userName);

// // Default value
// const { country = "Bangladesh" } = user;
// console.log(country);

// // Array
// const nums = [1, 2, 3];
// const [a, b] = nums;
// console.log(a, b);

// // Nested
// const person = {
//   name: "Rayhan",
//   address: { city: "Chattogram" },
// };

// const {
//   address: { city },
// } = person;

// console.log(city);

// // Function
// function greet({ name }: { name: string }) {
//   console.log(`Hello ${name}`);
// }

// greet({ name: "Rayhan" });
// ```

// ---

// ## 🔥 Pro Tip (Interview Gold)

// 👉 Object → `{}`
// 👉 Array → `[]`
// 👉 Use destructuring to write **clean & readable code**

// ---

// If you want next level 🔥
// I can show:

// * destructuring + spread combo (very common)
// * advanced patterns used in React & Node
// * pitfalls in API handling

// Just tell me 👍
