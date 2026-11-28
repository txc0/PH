import dotenv from "dotenv";
import path from "path/win32";
dotenv.config({
    path: path.join(process.cwd(), ".env"), //? Load environment variables from .env file
});
const config = {
    port: process.env.PORT, //? Port number for the server to listen on
    connection_string: process.env.DATABASE_URL as string, //? Connection string for the PostgreSQL database
    JWT_SECRET: process.env.JWT_SECRET as string, //? Secret key for signing and verifying JSON Web Tokens
    JWT_REFRESH_SECRET: process.env.REFRESH_SECRET as string, //? Secret key for signing and verifying refresh tokens
};
export default config;