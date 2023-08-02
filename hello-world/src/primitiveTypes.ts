let sales: number = 13342;
// can add comma like separaters in TS
let bigsales: number = 124_323_232;

let is_published: boolean = true;
let course: string = 'typescript';

//can initialize variables without annotating the type
let numbers = 133;
let strings = 'string';
//hover over the variable name to see the implied type

//what happens if we don't initialize the variable?
// ts assumes its of type any
let level;

//what is any?
level = 1;
level = 'a';
//both will work bc it's type any
//type any removes type casting power

// this throws a compile type error -> says doc has implicit any type
// function render(doc) {
//     console.log(doc);
// }
//two options:
// annotate with any
// go to tsconfig section and turn off "noImplicitAny" : false
// this is the nuclear version
function render(doc: any) {
  console.log(doc);
}

// array types
let numberarr = [1, 2, '3'];
//has different types of variables inside
let numberarr2: number[] = [1, 2, 3];
//note that the compiler can infer type again for array types

//bc JS knows the type, we get the added code completion of number types for this array

//tuples
// fixed length array where each element has a particular type
// i.e. below have two types of data in one bag
let user: [number, string] = [1, 'Mosh'];
//can only have two things
// let user2: [number, string] = [1, 'Mosh', 0]; // throws error -> too many items
// let user3: [number, string] = ['Mosh', 1]; // throws error -> wrong type

//used to represent a list of related constants
// if you use the const keyword beforehand, the compiler creates more optimized code
// enum type (with PascalCase naming convention)
const small = 1;
const medium = 2;
const large = 3;

enum Size {
  Small,
  Medium,
  Large,
}
// by default it does the following assignation
// enum Size {Small = 0, Medium = 1, Large =2}
//can also do the following
// explicitly cast one of them
enum Size2 {
  Small1 = 10,
  Medium1,
  Large1,
}
// explicitly use strings across the board
enum Size3 {
  Small1 = 's',
  Medium1 = '3',
  Large1 = 'l',
}

let mySize: Size2 = Size2.Medium1;
console.log(mySize);

// functions
// ts compiler will infer the type of the return value
// you'll want to annotate all of the parameters and return value
function calculateTax(income: number): number {
  income = 2_000_000;
  return income * 1.2;
}
// the below code causes an issue because if income < 50 we have an issue
function calculateTax2(income: number): number {
  if (income > 50) return income * 1.2;
}
// JS functions return undefined by default
// can fix by removing the return type
function calculateTax3(income: number) {
  if (income > 50) return income * 1.2;
}
//so now we go to tsconfig.json and add:
//  noImplicitReturns: true
// which will cause explicit returns and fixing this undefined vs number return bug

// can create optional parameters in teh function by adding a "?" at the end
function calculateTaxOptionalValues(income: number, taxYear?: number): number {
  if (taxYear > 2022) return income * 1.2;
  return income * 1.3;
}
//this does cause an issue with the taxYear possibly being undefined if it's not passed into the funciton call -> like below
calculateTaxOptionalValues(10_000);

//to fix you can either:
//1)
function calculateTaxOptionalValues2(income: number, taxYear?: number): number {
  if ((taxYear || 2022) > 2022) return income * 1.2;
  return income * 1.3;
}
//2  -> add default to value in funciton -> implicit determined
function calculateTaxOptionalValues3(income: number, taxYear = 2022): number {
  if (taxYear > 2022) return income * 1.2;
  return income * 1.3;
}

// OBJECTS
let employee = { id: 1 };
// in JS you can do the below
employee.name = 'Mosh';
// but in TS, this is not allowed as TS has inferred teh shape of the employee object

// to fix do the below
let employee2: {
  id: number;
  name: string;
} = { id: 1 };

// this still has an error because the employee2 we created/initialized does not have a name
// two solutions
// 1
let employee3: {
  id: number;
  name: string;
} = { id: 1, name: '' }; // cannot initialize to null or undefined here
//2
let employee4: {
  id: number;
  name?: string; // make the name optional
} = { id: 1 };

//make certain property read only
let employee5: {
  readonly id: number; //now emplouyee5.id = 0 will fail
  name: string;
} = { id: 1, name: 'Mario' };

// how to create a method in the object? --> use an arrow function
let employee6: {
  id: number;
  name: string;
  retire: (date: Date) => void;
} = { id: 1, name: 'Mario', retire: (date: Date) => console.log(date) };
//this is making our object code verbose, so let's see how to use more advanced typescript
