//*typeof
//? arr, null etc etc determines as object in TS
let x= 123;
console.log(typeof x); // "number"

//*typeof type guard

const print = (value : string | number) => {
    if(typeof value === "string") {
        return value.toUpperCase(); //? error: Object is of type 'string | number'. Property 'toUpperCase' does not exist on type 'number'. Did you mean to call 'toString'?
    }
    else {
        return value.toString(); 
    }
}

//*truthiness check
