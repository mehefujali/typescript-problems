#  TypeScript Blog - Interface vs Type & keyof Made Easy

Hi friends!   
Today we will learn two important things in TypeScript. Don’t worry, I will explain very simply, so even a small child can understand.

---

##  1. Interface vs Type – What’s the Difference?

In TypeScript, we use **interface** and **type** to say how an object should look.

Let’s see with example:

###  Interface Example:


interface Person {
  name: string;
  age: number;
}

const me: Person = {
  name: "Mehefuj",
  age: 22,
};
Here, we are saying: "A Person must have a name and age".

- Type Example:
ts
Copy
Edit
type Animal = {
  name: string;
  legs: number;
};

const dog: Animal = {
  name: "Tommy",
  legs: 4,
};
This is same like interface. But type can do more things.

 Difference in Simple Words:
Interface	Type
Mainly used for objects	Can be used for objects, unions, and more
Can be extended using extends	Can be combined using &
Easy to use in classes	More flexible for advanced uses

- Use interface if you are just making an object.
- Use type if you need to mix things or do something extra.

🗝️ 2. What is keyof in TypeScript?
Let’s say we have a student object:

ts
Copy
Edit
type Student = {
  name: string;
  roll: number;
  passed: boolean;
};
Now, if we write:

ts
Copy
Edit
type StudentKeys = keyof Student;
Then StudentKeys means only: "name" | "roll" | "passed"

So now we can write a function like this:

ts
Copy
Edit
function getStudentInfo(student: Student, key: StudentKeys) {
  return student[key];
}
If we call:

ts
Copy
Edit
const student1: Student = {
  name: "Rahul",
  roll: 101,
  passed: true,
};

console.log(getStudentInfo(student1, "roll")); // works
console.log(getStudentInfo(student1, "marks")); //  error
So, keyof makes sure we only use correct property names from the object. It helps TypeScript catch mistakes early.

### In Short:
- interface and type both are used to describe object shape.
- Use interface when it's simple, use type when you need more power.
- keyof helps to get all keys of an object as a type.
- It keeps code safe and clean.

Thanks for reading! 
Hope you understood everything easily. Happy coding with TypeScript! 