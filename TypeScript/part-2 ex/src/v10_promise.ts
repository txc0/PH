interface User {
  name: string;
  role: string;
}

interface ApiResponse<T> {
  data: T;
  success: boolean;
  statusCode: number;
  message: string;
}

const fetchUser = async (): Promise<User | undefined> => { //? here we are using generics to create a function that can take any type of value and return an array of that type.
  try {
    const res = await fetch("/api/v1/some-endpoint");
    const data = (await res.json()) as ApiResponse<User>;//? here we are using generics to create a function that can take any type of value and return an array of that type.

    if (!res.ok || !data.success) { //? here we are checking if the response is not ok or the success property of the data is false, if either of these conditions is true then we throw an error with a message that includes the message property of the data.
      throw new Error(`Failed fetch user data: ${data.message}`); //? here we are checking if the response is not ok or the success property of the data is false, if either of these conditions is true then we throw an error with a message that includes the message property of the data.
    }

    return data.data;
  } catch (error) {
    if (error instanceof Error) { //? here we are checking if the error is an instance of the Error class, if it is then we can safely access the message property of the error without any error.
      console.error(error.message);
    } else {
      console.error("Something Went Wrong");
    }
  }
};

const userData = await fetchUser();

if (userData) { //? here we are checking if userData is not undefined, if it is not undefined then we can safely access userData.name without any error.
  console.log(userData.name);
}