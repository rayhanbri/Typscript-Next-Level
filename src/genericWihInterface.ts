// eta ektu beshi practice korbo

interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  bike?: X;
}

interface BrandCharaWatch {
  heartRate: string;
  stopwatch: boolean;
}

interface AppleWatch {
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  AiFeature: boolean;
}

const poorDeveloper: Developer<
  BrandCharaWatch,
  { brand: "Yamaha"; engineCapacity: "200cc" }
> = {
  name: "Mr. Poor",
  salary: 20,
  device: {
    brand: "lenovo",
    model: "A21",
    releasedYear: "2010",
  },
  smartWatch: {
    heartRate: "200",
    stopwatch: true,
  },
};

const richDeveloper: Developer<AppleWatch> = {
  name: "Mr. Rich",
  salary: 100,
  device: {
    brand: "hp",
    model: "X34",
    releasedYear: "2050",
  },
  smartWatch: {
    heartRate: "200",
    callSupport: true,
    calculator: true,
    AiFeature: true,
  },
  bike: null,
};

const add = (num1: number, num2: number = 0) => num1 + num2;

add(2);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ## 1. Simple Explanation

// **Generics with Interface** means creating an interface that can work with **different types dynamically**.

// 👉 Instead of fixing a type inside the interface, we use a placeholder like `<T>`.

// * Normal interface → fixed type
// * Generic interface → flexible & reusable

// 👉 Think:
// “Same structure, different data types”

// ---

// ## 2. Key Concepts

// * Generic parameter (`<T>`)
// * Reusable interface design
// * Type safety
// * Dynamic data structure
// * Multiple generics (`<T, U>`)
// * Constraints (`extends`)

// ---

// ## 3. Interview Questions (Basic → Advanced)

// ### Q1: What is a generic interface?

// **Answer:**
// An interface that uses type parameters (`<T>`) to work with multiple types.

// ---

// ### Q2: Why use generics with interfaces?

// **Answer:**
// To make interfaces reusable and avoid duplicating code for different types.

// ---

// ### Q3: How do you define a generic interface?

// **Answer:**
// By adding `<T>` after the interface name.

// ---

// ### Q4: Can interfaces have multiple generics?

// **Answer:**
// Yes, like `<T, U>`.

// ---

// ### Q5: Can generic interfaces use constraints?

// **Answer:**
// Yes, using `extends` to restrict types.

// ---

// ## 4. Sample Code

// ### 🔹 Basic Generic Interface

// ```ts
// interface Box<T> {
//   value: T;
// }

// function printBox<T>(box: Box<T>) {
//   console.log(box.value);
// }

// // function calls
// printBox<string>({ value: "Hello" });
// printBox<number>({ value: 100 });
// ```

// ---

// ### 🔹 Generic Interface with Multiple Types

// ```ts
// interface Pair<T, U> {
//   first: T;
//   second: U;
// }

// function printPair<T, U>(pair: Pair<T, U>) {
//   console.log(pair.first, pair.second);
// }

// // function call
// printPair<string, number>({ first: "Age", second: 25 });
// ```

// ---

// ### 🔹 Generic Interface with Constraint

// ```ts
// interface HasLength {
//   length: number;
// }

// interface Data<T extends HasLength> {
//   item: T;
// }

// function showLength<T extends HasLength>(data: Data<T>) {
//   console.log(data.item.length);
// }

// // function calls
// showLength({ item: "Hello" });
// showLength({ item: [1, 2, 3] });
// ```

// ---

// ### 🔹 Real-Life Style Interface (API Response)

// ```ts
// interface ApiResponse<T> {
//   data: T;
//   success: boolean;
// }

// function handleResponse<T>(res: ApiResponse<T>) {
//   console.log(res.data);
// }

// // function call
// handleResponse<{ name: string }>({
//   data: { name: "Rayhan" },
//   success: true,
// });
// ```

// ---

// ## 5. Real-World Examples

// ### Example 1: API Handling

// 👉 Same interface works for different responses

// * User data
// * Product data
// * Order data

// ---

// ### Example 2: Reusable Components (Frontend)

// 👉 In React:

// ```ts
// interface Props<T> {
//   data: T;
// }
// ```

// Used for dynamic components like tables, lists, etc.

// ---

// ## 6. Common Mistakes

// ❌ Forgetting to pass type (`<T>`)
// ❌ Using `any` instead of generics
// ❌ Overusing generics unnecessarily
// ❌ Not using constraints when required

// ---

// ## 7. Quick Summary

// * Generic interface = flexible interface
// * `<T>` = dynamic type
// * Use for reusable structures (API, components, data models)
// * Keeps code clean & type-safe

// ---

// ## 8. Extra Real-World Insight

// 👉 Example: Reusable Table Data

// ```ts
// interface Table<T> {
//   rows: T[];
// }

// function printTable<T>(table: Table<T>) {
//   console.log(table.rows);
// }

// // function call
// printTable<{ id: number; name: string }>({
//   rows: [{ id: 1, name: "Rayhan" }],
// });
// ```

// 👉 One interface → works for any table data

// ---

// If you want next, I can give you **Generics + TypeScript backend (real MERN/Express use cases)** which is very common in interviews.
