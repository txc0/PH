//* type assertion
//* "as" type 
type status = "success" | "error" | "loading";

const someStatus: string = "success"; //? we are checking type here not the value, so it is valid to assign a string value to a variable of type status.

const showStatus = (status: status) => {
    console.log(`your current status is ${status}`);
}

//showStatus(someStatus); //! error: Argument of type 'string' is not assignable to parameter of type 'status'
showStatus(someStatus as status); //? type assertion using "as" keyword

//* non-null assertion operator
interface Config {
    port: number;
}
const config : Config = {
    port: 3000
}
const currentPort : number = config.port!; //? non-null assertion operator, we are asserting that config.port is not null or undefined.

