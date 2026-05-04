//union types

type UserRole = "admin" | "user" | "guest";

const getDashboarad = (role: UserRole) => {
  if (role === "admin") {
    return "Admin dashboard";
  } else if (role === "user") {
    return "user dashboard";
  } else {
    return "guest dasboard v ";
  }
};

//intersection &

type Employee = {
  id: string;
  name: string;
  phoneNO: string;
};

type Manager = {
  description: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const chowdhury: EmployeeManager = {
  name: "rayhan",
  id: "123",
  phoneNO: "012",
  description: "heelo",
  teamSize:2

};
