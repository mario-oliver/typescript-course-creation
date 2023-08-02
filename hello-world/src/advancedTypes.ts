//here's the employee we created at the end of the previous section
let employeeMario: {
  id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: 'Mario',
  retire: (date: Date) => console.log(date),
};
//there are three problems with this implementation
//1) wehn initializing a new employee object you will need to repeat the below section (the shape) of code
// id: number;
// name: string;
// retire: (date: Date) => void;
// need to implement DRY principle -> dont repeat yourself
//2) too verbose
// 3) issues with

type Employee = {
  id: number;
  name: string;
  retire: (date: Date) => void;
};
let employeeM: Employee = {
  id: 1,
  name: 'Mario',
  retire: (date: Date) => console.log(date),
};

// union types
// can give a var or funciton param more than one type
function kgToLbs(weight: number | string) {
  //Narrowing -> union type to make more specific
  if (typeof weight === 'number') {
    //gives us access to all methods in number objects
    return weight * 2.2;
  } else {
    // gives us all string methods
    return parseInt(weight) * 2.2;
  }
}
//can call func in the following two ways
kgToLbs(10);
kgToLbs('10');

//intersection types -> the var is both types simultaenously
let weight: number & string;
//let's look at a more realistic var
type Draggable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};
//new type
type UIWidget = Draggable & Resizable;
//now need to implement all members of both objects
let textBox: UIWidget = {
  drag: () => {
    console.log('dragged');
  },
  resize: () => {
    console.log('resize');
  },
};

//literal types
//limit the values we can assign to a var
type Quantity = 50 | 100;
let quantity: Quantity = 100;

//nullable types
function greet(name: string) {
  console.log(name.toLowerCase);
}

greet(null); //thows error

//want to be able to use a null value
//for example, you don't have a name value
function greetNull(name: string | null) {
  if (name) console.log(name.toLowerCase);
  else console.log('Hola');
}

//cannot pass undefined either though
// can use union operator again to allow
