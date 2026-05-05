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
