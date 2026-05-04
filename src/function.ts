//arrow function , normal function

function add(num1: number, num2: number): number {
  //rturn type
  return num1 + num2;
}

add(2, 3);

// Arrow Function

const addArrow = (num1: number, numb2: number) => num1 + numb2;

addArrow(1, 2);

// Object function Method

const poorUser = {
  name: "rayhan",
  balance: 0,
  //   addBalance(value: number) {
  //     return this.balance + value;
  //   },

  addBalance(value: number): number {
    // what it this
    const totalBalance = this.balance + value;
    return totalBalance;
  },
};

poorUser.addBalance(1000);

// call back function
//what is callbackfunction

const arr: number[] = [1, 3, 2];

const sqrArray = arr.map((element: number): number => element * element);
