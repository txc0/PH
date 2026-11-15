//* top types
let a = 1;
a = "hello";
a = true;
a.length; // no error
const something = "hello";
//!something.length; // error: Object is of type 'unknown'.
//* core types
const num = 1;
const str = "hello";
const bool = true;
let something2 = "hello";
const loggedInUser = null;
//*unit type
const greet = () => {
    console.log("Hello");
};
greet();
//*subtype
const anotherGreet = () => {
    console.log("Hello");
};
anotherGreet();
//*never type
const throwError = (message) => {
    throw new Error(message);
};
const x = throwError("Something went wrong");
export {};
