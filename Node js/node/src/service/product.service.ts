import fs from "fs";
import path from "path";
import type { IProduct } from "../types/product";

const filePath = path.join(process.cwd(), "./src/database/db.json");

export const productService = () => {
  //   console.log(process.cwd());
  //   console.log(filePath);
  const result = fs.readFileSync(filePath, "utf-8");
  //   console.log(result.toString());
  //   console.log(result);
  return JSON.parse(result);
};

export const createProduct = (payload: IProduct[]) => { //? payload is an array of IProduct objects that will be written to the db.json file. The function uses the fs module to write the stringified payload to the file at the specified filePath. This effectively updates the product data stored in the db.json file with the new payload.
  fs.writeFileSync(filePath, JSON.stringify(payload)); //? JSON stringify is used to convert the payload array into a JSON string before writing it to the file. This ensures that the data is stored in a proper JSON format in the db.json file.
};