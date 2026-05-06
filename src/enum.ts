// enum

// set of fixed string leteral ek jaigai rakhe

// type UserRoles = "Admin" | "Editor" | "Viewer";

//enum is not recommended for enum.js

enum UserRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const canEdit = (role: UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else return false;
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);

// for run this code
// node --experimental-transform-types ./src/enum.ts

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ## 1. Simple Explanation

// **Enum (Enumeration)** in **TypeScript** is used to define a set of **named constant values**.

// 👉 Instead of using random strings or numbers, you give them meaningful names.

// 👉 Think:
// “Fixed list of options with readable names”

// ---

// ## 2. Key Concepts

// * Named constants
// * Numeric enum (default)
// * String enum
// * Auto-increment values
// * Reverse mapping (numeric enums)
// * Readability & maintainability

// ---

// ## 3. Interview Questions (Basic → Advanced)

// ### Q1: What is an Enum in TypeScript?

// **Answer:**
// An enum is a collection of named constant values used to represent a fixed set of options.

// ---

// ### Q2: What are the types of enums?

// **Answer:**

// * Numeric enum
// * String enum

// ---

// ### Q3: What is auto-increment in enums?

// **Answer:**
// In numeric enums, values automatically increase starting from 0.

// ---

// ### Q4: What is reverse mapping?

// **Answer:**
// Numeric enums allow getting the key from the value.

// ---

// ### Q5: When should you use enums?

// **Answer:**
// When you have a fixed set of related constants (e.g., status, roles).

// ---

// ## 4. Sample Code

// ### 🔹 Numeric Enum

// ```ts id="n1u8mz"
// enum Status {
//   Pending,
//   Approved,
//   Rejected,
// }

// function printStatus(status: Status) {
//   console.log(status);
// }

// // function calls
// printStatus(Status.Pending);   // 0
// printStatus(Status.Approved);  // 1
// ```

// ---

// ### 🔹 String Enum

// ```ts id="q5w3xv"
// enum Role {
//   Admin = "ADMIN",
//   User = "USER",
//   Agent = "AGENT",
// }

// function printRole(role: Role) {
//   console.log(role);
// }

// // function calls
// printRole(Role.Admin);
// printRole(Role.User);
// ```

// ---

// ### 🔹 Custom Numeric Enum

// ```ts id="p9k2ls"
// enum Direction {
//   Up = 1,
//   Down,
//   Left,
//   Right,
// }

// function move(dir: Direction) {
//   console.log(dir);
// }

// // function calls
// move(Direction.Up);    // 1
// move(Direction.Left);  // 3
// ```

// ---

// ### 🔹 Reverse Mapping (Numeric Enum Only)

// ```ts id="d7m4az"
// enum Status {
//   Pending,
//   Approved,
// }

// function getStatusName(value: number) {
//   console.log(Status[value]);
// }

// // function call
// getStatusName(0); // "Pending"
// ```

// ---

// ## 5. Real-World Examples

// ### Example 1: User Roles (Backend)

// ```ts id="z3v6rb"
// enum UserRole {
//   Admin = "ADMIN",
//   Agent = "AGENT",
//   User = "USER",
// }

// function checkAccess(role: UserRole) {
//   console.log("Role:", role);
// }

// // function call
// checkAccess(UserRole.Admin);
// ```

// 👉 Used for authentication & authorization

// ---

// ### Example 2: Order Status (E-commerce)

// ```ts id="y8t1fn"
// enum OrderStatus {
//   Pending = "PENDING",
//   Shipped = "SHIPPED",
//   Delivered = "DELIVERED",
// }

// function trackOrder(status: OrderStatus) {
//   console.log(status);
// }

// // function call
// trackOrder(OrderStatus.Shipped);
// ```

// 👉 Prevents invalid status values

// ---

// ## 6. Common Mistakes

// ❌ Using enums when simple objects or unions are enough
// ❌ Overusing numeric enums (can be confusing)
// ❌ Forgetting string enums for readability
// ❌ Relying on reverse mapping (not available in string enums)

// ---

// ## 7. Quick Summary

// * Enum = fixed set of named constants
// * Improves readability & safety
// * Numeric (auto values) vs String (clear values)
// * Common in roles, status, directions

// ---

// ## 8. Extra Real-World Insight

// 👉 In real projects (like your MERN backend):

// ```ts id="w4c9hp"
// enum PropertyStatus {
//   Pending = "PENDING",
//   Verified = "VERIFIED",
//   Rejected = "REJECTED",
// }

// function updateStatus(status: PropertyStatus) {
//   console.log(status);
// }

// // function call
// updateStatus(PropertyStatus.Verified);
// ```

// 👉 Useful for:

// * DB status fields
// * Business logic
// * API consistency

// ---

// If you want next, I can explain **Enum vs Union Type (very common tricky interview question)**.
