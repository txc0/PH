const someStatus = "success"; //? we are checking type here not the value, so it is valid to assign a string value to a variable of type status.
const showStatus = (status) => {
    console.log(`your current status is ${status}`);
};
//showStatus(someStatus); //! error: Argument of type 'string' is not assignable to parameter of type 'status'
showStatus(someStatus); //? type assertion using "as" keyword
const config = {
    port: 3000
};
const currentPort = config.port; //? non-null assertion operator, we are asserting that config.port is not null or undefined.
export {};
