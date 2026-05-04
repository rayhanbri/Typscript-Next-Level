const user1: {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
} = {
  id: 123,
  name: {
    firstName: "Mr.",
    lastName: "X",
  },
  gender: "male",
  contactNo: "0177",
  address: {
    division: "Chattogram",
    city: "Chattogram",
  },
};

// type alias

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 123,
  name: "rayhan",
};

type Name = string;

const myName: Name = "rayhan";

// function

type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2) => num1 + num2;
