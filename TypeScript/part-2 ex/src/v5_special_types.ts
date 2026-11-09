//* top types
let a : any = 1;
a = "hello";
a= true;
a.length; // no error
const something: unknown = "hello";
//!something.length; // error: Object is of type 'unknown'.


//* core types
const num: number = 1;
const str: string = "hello";
const bool: boolean = true;
let something2: unknown = "hello";

//*nullish types

interface User {
    id: number;
}
type loggedInUser = User | null;
const loggedInUser : loggedInUser = null;

//*unit type
const greet =  (): void => {
    console.log("Hello");
}
greet();
//*subtype
const anotherGreet =  (): undefined => {
    console.log("Hello");
}
anotherGreet();

//*never type
const throwError = (message: string): never => {
    throw new Error(message);
}
const x : string= throwError("Something went wrong");