const wrapInArray = <T>(value: T) => { //? here we are using generics to create a function that can take any type of value and return an array of that type.
  return [value];
};

const stringArr = wrapInArray<string>("ABC"); //? here we are calling the wrapInArray function with a string value and specifying the type as string. The return type of this function will be an array of strings.
const numberArr = wrapInArray<number>(123);

stringArr.map((item) => item.toUpperCase());

interface User {
  name: string;
  role: string;
}

interface Blog {
  title: string;
  description: string;
  date: string;
}

interface ApiResponse<T> {
  data: T;
  success: boolean;
  statusCode: number;
}

type UserResponse = ApiResponse<User>;
type BlogResponse = ApiResponse<Blog>;

const userRes: ApiResponse<User> = {
  statusCode: 200,
  success: true,
  data: {
    name: "sdfas",
    role: "sfas",
  },
};