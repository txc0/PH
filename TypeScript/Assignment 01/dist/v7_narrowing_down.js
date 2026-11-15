//*typeof
//? arr, null etc etc determines as object in TS
let x = 123;
console.log(typeof x); // "number"
//*typeof type guard
const print = (value) => {
    if (typeof value === "string") {
        return value.toUpperCase(); //? error: Object is of type 'string | number'. Property 'toUpperCase' does not exist on type 'number'. Did you mean to call 'toString'?
    }
    else {
        return value.toString();
    }
};
const loggedInUser = {
    name: "John",
    address: {
        street: "123 Main St"
    }
};
const showAddress = (user) => {
    if (user && user.address) //? truthiness check, we are checking if user and user.address are not null or undefined.
        console.log(user.address.street);
    else
        throw new Error("User not found");
    return;
};
//* caveat of type guards
const printAll = (value) => {
    if (value && typeof value === "string") { //? here we are checking if value is not null and is of type string
        console.log(value.toUpperCase());
    }
    else if (value && typeof value === "number") {
        console.log(value.toString());
    }
    else
        throw new Error("value is null");
};
//* Equality narrowing
const isAdmin = (user) => {
    if (user.isAdmin === true) { //? here we are checking if user.isAdmin is true, if it is true then we can safely access user.isAdmin without any error.
        console.log("User is admin");
    }
    else {
        console.log("User is not admin");
    }
};
const move = (animal) => {
    if ("fly" in animal) { //? here we are checking if animal has a property fly, if it does then we can safely access animal.fly without any error.
        return animal.fly();
    }
    else {
        return animal.swim();
    }
};
//* instanceof narrowing
const showDate = (date) => {
    if (date instanceof Date) { //? here we are checking if date is an instance of Date, if it is then we can safely access date.getDate() without any error.
        console.log(date.toISOString());
        return;
    }
};
const getArea = (shape) => {
    if (shape.kind === "circle") { //? here we are checking if shape.kind is "circle", if it is then we can safely access shape.radius without any error.
        return Math.PI * shape.radius ** 2;
    }
    else { //? if shape.kind is not "circle", then it must be "square"
        return shape.sideLength ** 2;
    }
};
export {};
