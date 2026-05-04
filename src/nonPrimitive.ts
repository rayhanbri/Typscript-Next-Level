//array, object

let bazarlist: string[] = ["tomato", "alu"];

// bazarlist.push(12);

let mixedArray: (string | number)[] = ["apple", 3, "alu"];

mixedArray.push(true);

// two only, touple

let coordinates: [number, number] = [1, 2, 2];

let couple: [string, number] = ["rayhan", 12];

//object types
//literal types 
//access modified 
//optional type 

const user: {
  Organization: "Programming Hero";  //literal type 
  readonly salary : number;   //access modifier 
  fristName: string;
  middlenName?: string; //optional type
  lastName: string;
} = {
  fristName: "Rayhan",
  lastName: "bro ",
  Organization,
  salary:12
};

user. 
