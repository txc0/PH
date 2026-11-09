//literal types
type Direction = "up" | "down" | "left" | "right";
type Status = "pending" | "approved" | "rejected";
const move : Direction = "up";
console.log(move);

//basic union types
type StringOrNumber = string | number;
const value1: StringOrNumber = "Hello";
const value2: StringOrNumber = 42;  

//lietral union 
type userRole = "admin" | "user" | "guest";
const role1: userRole = "user";
const role2: userRole = "user";  
const role3: userRole = "guest";

console.log(role1);
console.log(role2);
console.log(role3);

//object union 
type admin = {
    id: number;
  name: string;
  role: "admin";
  privileges: string[];
};
type member = {
    id: number;
  name: string;
  role: "member";
  plans: string[];
};

type user = admin | member;

 const user1: user = {id: 1, name: "John", role: "admin", privileges: ["create", "delete"]};
 const user2: user = {id: 2, name: "Jane", role: "member", plans: ["basic", "premium"]};