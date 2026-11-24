import { pool } from "../../db/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const loginUserIntoDB = async (payload:{email:string, password:string}) => {
    // user is there in the database or not
    // password is correct or not
    // user status is active or not
    // if passed all then generate JWT token and return to user
    const { email, password } = payload;
    const userExists = await pool.query(
        `
        SELECT * FROM users WHERE email=$1
        `,
        [email]
    );

    if (!userExists.rows.length) {
        throw new Error("Invalide credentials");
    }

    const user = userExists.rows[0];

    if (user.is_active === false) {
        throw new Error("User is not active");
    }
    
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        throw new Error("Invalide credentials");
    }

    const jwtPayload = {
        id: user.id,
        name: user.name,
        email: user.email,
    };

    const accessToken =  jwt.sign(jwtPayload, process.env.JWT_SECRET as string, { expiresIn: "1d" });
    
    delete user.accessToken;

    return {accessToken, user: user.rows[0]}; 

}

export const authService = {
    loginUserIntoDB
}