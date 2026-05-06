// as const assertion

//9 number video

// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }

const UserRoles = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER",
} as const;

/*
{
  readonly Admin: "Admin",
  readonly Editor: "Editor",
  readonly Viewer: "Viewer",

1. typeof perator
2. keyof operator 

const user= {
 id: 222,
 name:'Mezba'
}

user['id'] >>> 222


typeof user;

{
id: number;
name:string
}

typeof UserRoles

{
 Admin: 'Admin';
 Editor: "Editor",
 Viewer: "Viewer",
}

keyof typeof UserRoles
'Admin'| 'Editor' | 'Viewer'

'ADMIN' |'EDITOR |'VIEWER'

UserRoles['Admin']  >>> 'ADMIN'
  typeof UserRoles[keyof typeof UserRoles]


}
*/

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else return false;
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);

///-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ## 1. Simple Explanation

// **`as const` assertion** in TypeScript is used to make values **fully immutable and strictly typed**.

// 👉 It tells TypeScript:

// * “Don’t widen this type”
// * “Treat this value as a literal, not a general type”

// 👉 Example idea:

// * Normal: `"admin"` → string
// * With `as const`: `"admin"` → literal type `"admin"`

// ---

// ## 2. Key Concepts

// * Literal types (`"admin"`, `10`, `true`)
// * Type widening vs narrowing
// * Readonly properties
// * Immutable arrays/objects
// * Const assertion (`as const`)
// * Strong type safety

// ---

// ## 3. Interview Questions (Basic → Advanced)

// ### Q1: What is `as const` in TypeScript?

// **Answer:**
// It makes a value deeply readonly and keeps its exact literal type.

// ---

// ### Q2: What problem does `as const` solve?

// **Answer:**
// It prevents TypeScript from widening types (e.g., `"admin"` becoming `string`).

// ---

// ### Q3: What is type widening?

// **Answer:**
// TypeScript automatically converts literal values into broader types.

// ---

// ### Q4: Difference between `const` and `as const`?

// **Answer:**

// * `const` → prevents reassignment
// * `as const` → locks type as literal + readonly

// ---

// ### Q5: Where is `as const` useful?

// **Answer:**
// In roles, config objects, enums replacement, and API constants.

// ---

// ## 4. Sample Code

// ---

// ## 🔹 Basic Example (Without as const)

// ```ts id="a1k9qz"
// const role = "admin";

// // function call
// function printRole(r: string) {
//   console.log(r);
// }

// printRole(role);
// ```

// 👉 Type becomes `string` (widened)

// ---

// ## 🔹 With `as const`

// ```ts id="k3m7xz"
// const role = "admin" as const;

// function printRole(r: "admin") {
//   console.log(r);
// }

// // function call
// printRole(role);
// ```

// 👉 Now type is exactly `"admin"`

// ---

// ## 🔹 Object with as const

// ```ts id="p9x2lm"
// const user = {
//   name: "Rayhan",
//   role: "admin",
// } as const;

// // function call
// function printUser(u: typeof user) {
//   console.log(u.name);
// }

// printUser(user);
// ```

// 👉 Properties become readonly + literal types

// ---

// ## 🔹 Array with as const

// ```ts id="v7n3qp"
// const roles = ["admin", "user", "agent"] as const;

// // function call
// function printRoles(r: typeof roles) {
//   console.log(r);
// }

// printRoles(roles);
// ```

// 👉 Becomes readonly tuple:
// `["admin", "user", "agent"]`

// ---

// ## 🔹 Practical Example (Union Type Creation)

// ```ts id="z5k8wb"
// const roles = ["admin", "user", "agent"] as const;

// type Role = typeof roles[number];

// function checkRole(role: Role) {
//   console.log(role);
// }

// // function calls
// checkRole("admin");
// checkRole("user");
// ```

// 👉 Converts array into union type

// ---

// ## 5. Real-World Examples

// ---

// ### Example 1: API Role System

// ```ts id="m2x9lv"
// const USER_ROLES = {
//   ADMIN: "admin",
//   USER: "user",
//   AGENT: "agent",
// } as const;

// // function call
// function getRole(role: typeof USER_ROLES[keyof typeof USER_ROLES]) {
//   console.log(role);
// }

// getRole(USER_ROLES.ADMIN);
// ```

// 👉 Prevents invalid role strings

// ---

// ### Example 2: Route Paths (Frontend)

// ```ts id="c7n4qp"
// const ROUTES = {
//   HOME: "/",
//   DASHBOARD: "/dashboard",
//   PROFILE: "/profile",
// } as const;

// // function call
// function goTo(route: typeof ROUTES[keyof typeof ROUTES]) {
//   console.log("Navigating to:", route);
// }

// goTo(ROUTES.HOME);
// ```

// 👉 Prevents wrong route strings

// ---

// ## 6. Common Mistakes

// ❌ Thinking `as const` only means “const variable”
// ❌ Forgetting it also makes nested objects readonly
// ❌ Overusing it everywhere unnecessarily
// ❌ Confusing it with enums (they are different)
// ❌ Not using `typeof` with it for reuse

// ---

// ## 7. Quick Summary

// * `as const` = makes value **readonly + literal type**
// * Prevents type widening
// * Useful for constants, roles, configs
// * Helps create union types from arrays
// * Improves type safety in real projects

// ---

// ## 8. Extra Real-World Insight

// 👉 In your MERN / real estate project:

// ```ts id="t4q8mz"
// const PROPERTY_STATUS = ["pending", "verified", "rejected"] as const;

// type PropertyStatus = typeof PROPERTY_STATUS[number];

// function updateStatus(status: PropertyStatus) {
//   console.log(status);
// }

// // function call
// updateStatus("verified");
// ```

// 👉 Very useful for:

// * Status fields (DB)
// * Role systems
// * Config constants
// * API-safe values

// ---

// If you want next, I can give you **advanced comparison: `enum vs as const` (very common interview question)** + real project patterns.
