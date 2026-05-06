// mapped types

// map

const arrayOfNum: number[] = [1, 4, 6];

const arrayOfstring: string[] = ["1", "4", "6"];

const arrayOfStringUsingMap: string[] = arrayOfNum.map((num) => num.toString());

console.log(arrayOfStringUsingMap);

const user = {
  id: 222,
};

type AreaOfNum = {
  height: number;
  width: number;
};

type height = AreaOfNum["height"];

// type AreaOfString = {
//  height: string;
//   width: string;
// };

type Area<T> = {
  [key in keyof T]: T[key];

  // key >> height >> string
  // key >> width >> number
};

/*

T >>>   { height: string; width: number }
  
{  height: string; width: number }['height']: number

*/

//"height" |"width"

const area1: Area<{ height: string; width: boolean }> = {
  height: "50",
  width: false,
};

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ## 1. Simple Explanation

// **Mapped Types** in TypeScript let you **create new types by transforming existing ones property-by-property**.

// 👉 It works like looping over object keys and changing them.

// 👉 Think:
// “Take an object type → loop its keys → modify each property”

// ---

// ## 2. Key Concepts

// * `keyof` (get object keys)
// * Index signatures (`[K in ...]`)
// * Type transformation
// * Optional/readonly modifiers (`+`, `-`)
// * Built-in utility types use mapped types
// * Reusable type patterns

// ---

// ## 3. Interview Questions (Basic → Advanced)

// ### Q1: What are mapped types?

// **Answer:**
// Mapped types create new types by iterating over keys of another type and transforming them.

// ---

// ### Q2: What is the syntax of mapped types?

// **Answer:**

// ```ts id="mk1"
// type NewType<T> = {
//   [K in keyof T]: T[K];
// };
// ```

// ---

// ### Q3: Where are mapped types used?

// **Answer:**
// In utility types like `Partial`, `Readonly`, `Pick`.

// ---

// ### Q4: Can we modify properties in mapped types?

// **Answer:**
// Yes, we can make them optional, readonly, or change types.

// ---

// ### Q5: Why are mapped types important?

// **Answer:**
// They allow powerful type transformations without rewriting types.

// ---

// ## 4. Sample Code

// ---

// ## 🔹 Basic Mapped Type (Clone Type)

// ```ts id="a1k9xp"
// type User = {
//   name: string;
//   age: number;
// };

// type MyMappedType<T> = {
//   [K in keyof T]: T[K];
// };

// // function example
// function printUser(user: MyMappedType<User>) {
//   console.log(user.name, user.age);
// }

// // function call
// printUser({ name: "Rayhan", age: 25 });
// ```

// 👉 Same structure copied

// ---

// ## 🔹 Make All Properties Optional (Like Partial)

// ```ts id="b7m2xz"
// type MakeOptional<T> = {
//   [K in keyof T]?: T[K];
// };

// type User = {
//   name: string;
//   age: number;
// };

// function updateUser(user: MakeOptional<User>) {
//   console.log(user);
// }

// // function call
// updateUser({ name: "Rayhan" });
// ```

// ---

// ## 🔹 Make All Properties Readonly

// ```ts id="c3n8qp"
// type MakeReadonly<T> = {
//   readonly [K in keyof T]: T[K];
// };

// type Product = {
//   title: string;
//   price: number;
// };

// function showProduct(product: MakeReadonly<Product>) {
//   console.log(product.title);
// }

// // function call
// showProduct({ title: "Book", price: 100 });
// ```

// ---

// ## 🔹 Change Property Type

// ```ts id="d6v9lm"
// type ToString<T> = {
//   [K in keyof T]: string;
// };

// type User = {
//   name: string;
//   age: number;
// };

// function convert(user: ToString<User>) {
//   console.log(user);
// }

// // function call
// convert({ name: "Rayhan", age: "25" });
// ```

// 👉 All values become string

// ---

// ## 🔹 Rename Keys (Advanced Idea)

// ```ts id="e8x2qp"
// type RenameKeys<T> = {
//   [K in keyof T as `new_${string & K}`]: T[K];
// };

// type User = {
//   name: string;
// };

// function show(user: RenameKeys<User>) {
//   console.log(user.new_name);
// }

// // function call
// show({ new_name: "Rayhan" });
// ```

// ---

// ## 5. Real-World Examples

// ---

// ### Example 1: API DTO Transformation

// ```ts id="f5k7mn"
// type ApiModel = {
//   id: number;
//   name: string;
//   price: number;
// };

// type ReadOnlyApi = {
//   readonly [K in keyof ApiModel]: ApiModel[K];
// };

// function sendData(data: ReadOnlyApi) {
//   console.log(data);
// }

// // function call
// sendData({ id: 1, name: "Item", price: 500 });
// ```

// 👉 Used in API responses

// ---

// ### Example 2: Form Handling

// ```ts id="g2q8xz"
// type Form = {
//   username: string;
//   email: string;
// };

// type FormErrors = {
//   [K in keyof Form]?: string;
// };

// function showErrors(errors: FormErrors) {
//   console.log(errors);
// }

// // function call
// showErrors({ email: "Invalid email" });
// ```

// 👉 Used in validation systems

// ---

// ## 6. Common Mistakes

// ❌ Confusing mapped types with normal objects
// ❌ Forgetting `keyof` usage
// ❌ Overcomplicating simple types
// ❌ Not understanding built-in utility types are mapped types
// ❌ Using mapped types when simple interface is enough

// ---

// ## 7. Quick Summary

// * Mapped types = transform object types dynamically
// * Uses `[K in keyof T]`
// * Powers utility types like `Partial`, `Readonly`
// * Very important for advanced TypeScript

// ---

// ## 8. Extra Real-World Insight

// 👉 In your MERN project (very relevant):

// ```ts id="h9m3zq"
// type Property = {
//   title: string;
//   price: number;
//   location: string;
// };

// type EditableProperty = {
//   [K in keyof Property]?: Property[K];
// };

// function updateProperty(data: EditableProperty) {
//   console.log(data);
// }

// // function call
// updateProperty({ price: 80000 });
// ```

// 👉 Used in:

// * Update APIs (PATCH)
// * Admin dashboards
// * Form systems
// * Validation layers

// ---

// If you want next, I can give you **“Mapped Types vs Utility Types vs Conditional Types (interview comparison chart)”** which is a very common tricky interview topic.
