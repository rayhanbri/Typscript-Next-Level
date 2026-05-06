//dynamically generalize: Generic
//what is generics

type GenericArray<T> = Array<T>;

// type GenericArray = Array<number>;

// const friends: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];

// amra array use korle ki somossa

// const friends: Array<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

const friends: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

//const rollNumbers: number[] = [4, 7, 11];
const rollNumbers: GenericArray<number> = [4, 7, 11];

//const isEligibleList: boolean[] = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];

type User = { name: string; age: number };

const userList: GenericArray<User> = [
  {
    name: "Mr. X",
    age: 22,
  },
  {
    name: "Mr. Y",
    age: 25,
  },
];

const sqrFunc = (value: number): number => {
  return value * value;
};

sqrFunc(4);

// generics for tuple

type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ["20", "30"];

--------------------------------------------------------

// ## 1. Simple Explanation

// **Generics** in **TypeScript** allow you to write reusable and flexible code that works with different data types.

// 👉 Instead of fixing a type, you use a **placeholder type** (like `<T>`) that gets decided later.

// * Without generics → fixed type
// * With generics → dynamic & reusable type

// 👉 Think:
// “Write once, use with many types”

// ---

// ## 2. Key Concepts

// * Generic type parameter (`<T>`)
// * Reusability
// * Type safety
// * Constraints (`extends`)
// * Generic functions
// * Generic interfaces / types
// * Multiple generics (`<T, U>`)

// ---

// ## 3. Interview Questions (Basic → Advanced)

// ### Q1: What are Generics in TypeScript?

// **Answer:**
// Generics allow you to create reusable components that can work with different types while keeping type safety.

// ---

// ### Q2: Why use Generics?

// **Answer:**
// To avoid code duplication and maintain type safety across different data types.

// ---

// ### Q3: What is `<T>`?

// **Answer:**
// `<T>` is a type parameter (placeholder) that represents a type that will be provided later.

// ---

// ### Q4: What are generic constraints?

// **Answer:**
// They restrict the types that a generic can accept using `extends`.

// ---

// ### Q5: Can we use multiple generics?

// **Answer:**
// Yes, like `<T, U>` for handling multiple types.

// ---

// ## 4. Sample Code

// ### 🔹 Basic Generic Function

// ```ts 
// id="l2x9ka"
function identity<T>(value: T): T {
  return value;
}

// // function calls
console.log(identity<string>("Hello"));
console.log(identity<number>(100));
// ```

// ---

// ### 🔹 Without Generics (Problem)

// ```ts id="o8jvnt"
function identityString(value: string): string {
  return value;
}

function identityNumber(value: number): number {
  return value;
}

// // function calls
console.log(identityString("Hi"));
console.log(identityNumber(10));
// ```

// 👉 Duplicate code → generics solve this

// ---

// ### 🔹 Multiple Generics

// ```ts id="b3z1pq"
function pair<T, U>(first: T, second: U) {
  return { first, second };
}

// // function call
console.log(pair<string, number>("Age", 25));
// ```

// ---

// ### 🔹 Generic with Constraint

// ```ts id="8k6r0a"
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

// // function calls
console.log(getLength("Hello"));
console.log(getLength([1, 2, 3]));
// ```

// ---

// ## 5. Real-World Examples

// ### Example 1: API Response Wrapper

// ```ts id="j3lm9v"
type ApiResponse<T> = {
  data: T;
  success: boolean;
};

function handleResponse<T>(response: ApiResponse<T>) {
  console.log(response.data);
}

// // function call
handleResponse<{ name: string }>({
  data: { name: "Rayhan" },
  success: true,
});
// ```

// 👉 Same structure works for any API data

// ---

// ### Example 2: Reusable Array Function

// ```ts id="y6k2zs"
function getFirstItem<T>(arr: T[]): T {
  return arr[0];
}

// // function calls
console.log(getFirstItem<number>([1, 2, 3]));
console.log(getFirstItem<string>(["a", "b", "c"]));
// ```

// 👉 Works for any array type

// ---

// ## 6. Common Mistakes

// ❌ Not using generics and duplicating code
// ❌ Using `any` instead of generics → loses type safety
// ❌ Overcomplicating generics (too many `<T, U, V>`)
// ❌ Forgetting constraints → causes runtime errors

// ---

// ## 7. Quick Summary

// * Generics = reusable + type-safe code
// * `<T>` = placeholder for type
// * Use when logic is same but types vary
// * Better than `any`

// ---

// ## 8. Extra Real-World Insight

// 👉 Libraries like React, Axios, Prisma use generics heavily

// Example (React):

// ```ts id="r4mj0s"
const [state, setState] = useState<string>("Hello");
// ```

// 👉 Here `string` is a generic type

// ---

// If you want next, I can give you **advanced generics (mapped types, utility types like Partial, Pick, etc.)** which are very important for interviews.
