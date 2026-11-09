//* type alias vs interface
//TODO type alias
type Id = number;
//! interface id = number; 

type Role = "admin" | "user" | "guest";
//! interface role = "admin" | "user" | "guest";

interface user {
    id: Id;
    name: string;
    role: Role;
}

const user1: user = {id: 1, name: "John", role: "admin"};

//todo interface
interface Animal {
    species: string;
}

interface Dog extends Animal {
    breed: string;
} 

const dog1:Dog = {species: "Canine", breed: "Labrador"};

type vehicle = {
    brand: string;
}

//? the symbol & is used to combine two types into one. It is called intersection type. 
type car = vehicle &{    
    model: string;
}
const car1:car =  
{
    brand: "Toyota",
    model: "Camry"
};


//? interface can be merged, but type alias cannot be merged.
interface IVehicle {
    brand: string;
}
interface IVehicle {
    model: string;
}

type TVehicle = {
    brand: string;
}
//! type TVehicle = {
//!     model: string;
//! }  --- IGNORE ---


