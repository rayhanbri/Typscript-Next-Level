// ? : ternary opearator : decision making
// ?? : nullish coalescing operator : null/undefined
// ?. optional chaining

const userAge = 21;

const biyeJonnoEligible = (age: number) => {
  // if (age >= 21) {
  //   console.log("you are eligible");
  // } else {
  //   console.log("you are not eligible ");
  // }
  const result = age >= 21 ? "your are eligible" : "you are not elibigve";

  console.log(result);
};

biyeJonnoEligible(20);

const userTheme = undefined;

const selectedTheme = userTheme ?? "light theme"; //for null and undefined otherwise it will not work .

console.log(selectedTheme);

const isAuthincated = null;

const resultwithTernary = isAuthincated ? isAuthincated : "you are guest";

const resultWithNullis = isAuthincated ?? "you are guest";

console.log({ resultWithNullis }, { resultwithTernary });

//optional chaining

const user: {
  address: {
    city: string;
    town: string;
    postalcode?: string;
  };
} = {
  address: {
    city: "dhaka",
    town: "bonani",
  },
};
const postalCode = user?.address?.postalcode;
