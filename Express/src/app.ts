import express, {
  NextFunction,
  type Application,
  type Request,
  type Response,
} from "express";
import config from "./config/index.js";
import { initDB,pool } from "./db/index.js";
import { userRoute } from "./modules/users/user.route.js";
import { profileRoute } from "./modules/profile/profile.route.js";
import { authRoute } from "./modules/auth/auth.route.js";
import fs from "fs";
import logger from "./middleware/logger.js";

const app: Application = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(logger);



app.get("/", (req: Request, res: Response) => {
  //   console.log(req);
  //   res.send("This is root route");
  res.status(200).json({
    success: true,
    message: "This is root route",
    author: "PH",
  });
});


app.use("/api/v1/users", userRoute);
app.use("/api/v1/profiles", profileRoute);
app.use("/api/v1/auth", authRoute);
 




app.get("/api/v1/users", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`
    SELECT * FROM users  
      `);
    // console.log(result);
    res.status(200).json({
      success: true,
      message: "Users retrived successfully!",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      error: error,
    });
  }
});

// req.url => /prod/123
app.get("/api/v1/users/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params; //? Extracting the id parameter from the request URL
    const result = await pool.query(
      `
    SELECT * FROM users WHERE id=$1  
      `,
      [id], //? Passing the id parameter as a value to the query
    );
    // console.log(result);

    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: "User not found!!",
      });
    }

    res.status(200).json({
      success: true,
      message: "User retrived successfully!",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      error: error,
    });
  }
});

app.put("/api/v1/users/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, password, age, is_Active } = req.body;

    const result = await pool.query(
      `
    UPDATE users 
    SET
    name = COALESCE($1, name),  
    password = COALESCE($2, password),
    age = COALESCE($3, age),
    is_Active = COALESCE($4, is_Active),
    updated_at = NOW() 
    WHERE id=$5 RETURNING *
      `,
      [name ?? null, password ?? null, age ?? null, is_Active ?? null, id],
    );
    // console.log(result);

    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: "User not found!!",
      });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully!",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      error: error,
    });
  }
});

app.delete("/api/v1/users/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      `
    DELETE FROM users WHERE id=$1  
      `,
      [id],
    );
    // console.log(result);

    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: "User not found!!",
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      // data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      error: error,
    });
  }
});

export default app;