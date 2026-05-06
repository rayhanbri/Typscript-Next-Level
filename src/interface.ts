type User = {
  name: string;
  age: number;
};

// interface : object type: array, object , function
//difference between type alias and type interface

interface IUser {
  name: string;
  age: number;
}

type Role = {
  role: "admin" | "user";
};

// Intersection

type UserWithRole = User & Role;

// like intersection

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const user1: IUserWithRole = {
  name: "Mr.X",
  age: 100,
  role: "admin",
};

const user2: IUser = {
  name: "Mr. Y",
  age: 102,
};

type IsAdmin = boolean;

const isAdmin: IsAdmin = false;

// function

type Add = (num1: number, num2: number) => number;

interface IAdd {
  (num1: number, num2: number): number;
}

const add: IAdd = (num1, num2) => num1 + num2;

type Friends = string[];

// index signature

interface IFriends {
  [index: number]: string;
}

const freinds: IFriends = ["A", "B", "C"];

interface IList {
  name: string;
  weight: string;
}

interface IFull extends IList {
  price: number;
}

const BazarList: IFull = {
  name: "alu",
  weight: "e",
  price: 3,
};


--------------------------------------------------
// ## 1. Simple Explanation

// Both **`interface`** and **`type` (type alias)** are used in **TypeScript** to define the shape of data (objects, functions, etc.).

// * **Interface** → mainly used to define object structure
// * **Type Alias** → more flexible, can define objects, unions, primitives, functions, etc.

// 👉 Simple idea:

// * `interface` = best for objects & extensibility
// * `type` = best for flexibility

// ---

// ## 2. Key Concepts

// * Object shape definition
// * TypeScript static typing
// * Extending types (`extends`, `&`)
// * Union types (`|`)
// * Intersection types (`&`)
// * Reusability

// ---

// ## 3. Interview Questions (Basic → Advanced)

// ### Q1: What is an Interface in TypeScript?

// **Answer:**
// An interface defines the structure of an object with properties and their types.

// ---

// ### Q2: What is a Type Alias?

// **Answer:**
// A type alias creates a new name for any type (object, union, primitive, function, etc.).

// ---

// ### Q3: Difference between Interface and Type?

// **Answer:**

// * Interface → mainly for objects, can be extended & merged
// * Type → more flexible, supports unions, intersections, primitives

// ---

// ### Q4: Can interfaces and types be extended?

// **Answer:**
// Yes

// * Interface → `extends`
// * Type → `&` (intersection)
 
// ---

// ### Q5: Which one should you use?

// **Answer:**

// * Use **interface** for objects (especially in large apps)
// * Use **type** for unions, complex types, or flexibility

// ---

// ## 4. Sample Code

// ### 🔹 Interface Example

// ```ts
interface IUserr{
  name: string;
  age: number;
}

function printUser(user: Userr) {
  console.log(`${user.name} is ${user.age} years old`);
}

// // function call
printUser({ name: "Rayhan", age: 25 });
// ```

// ---

// ### 🔹 Type Alias Example

// ```ts
type User = {
  name: string;
  age: number;
};

function printUserType(user: User) {
  console.log(user.name, user.age);
}

// // function call
printUserType({ name: "Rahim", age: 30 });
// ```

// ---

// ### 🔹 Type with Union (Only possible with `type`)

// ```ts
type ID = string | number;

function printID(id: ID) {
  console.log("ID:", id);
}

// // function call
printID(101);
printID("A-202");
// ```

// ---

// ### 🔹 Extending Example

// #### Interface

// ```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}

function showEmployee(emp: Employee) {
  console.log(emp.name, emp.salary);
}

// // function call
showEmployee({ name: "Karim", salary: 50000 });
// ```

// #### Type

// ```ts
type Person = {
  name: string;
};

type Employee = Person & {
  salary: number;
};

function showEmployeeType(emp: Employee) {
  console.log(emp.name, emp.salary);
}

// // function call
showEmployeeType({ name: "Jamal", salary: 60000 });
// ```

// ---

// ## 5. Real-World Examples

// ### Example 1: API Response (Interface)

// ```ts
interface ApiUser {
  id: number;
  email: string;
}

function getUser(user: ApiUser) {
  console.log(user.email);
}

// // function call
getUser({ id: 1, email: "test@mail.com" });
// ```

// 👉 Interfaces are commonly used for API data models.

// ---

// ### Example 2: Flexible Input (Type)

// ```ts
type Input = string | number;

function processInput(input: Input) {
  console.log(input);
}

// // function call
processInput("Hello");
processInput(123);
// ```

// 👉 Type alias is useful when multiple types are allowed.

// ---

// ## 6. Common Mistakes

// ❌ Thinking `interface` and `type` are completely different
// → They are similar but used in different scenarios

// ❌ Using `interface` for unions
// → Not possible

// ❌ Overusing `type` for everything
// → Makes large apps harder to maintain

// ❌ Ignoring interface merging feature
// → Useful in scalable systems

// ---

// ## 7. Quick Summary

// * **Interface**

//   * Best for objects
//   * Supports extension & merging
//   * Common in large projects

// * **Type Alias**

//   * More flexible
//   * Supports unions & complex types
//   * Good for advanced typing

// ---

// If you want, I can give you **tricky interview scenarios (real project-based)** like when `type` fails but `interface` works (and vice versa).

