import { Request, Response, NextFunction } from "express";

const auth = (req: Request, res: Response, next: NextFunction) => {
    // console.log("Auth middleware");
    console.log(req.headers); 
    const token = req.headers.authorization; //?Check if token is present in the request headers
    if (!token) {
        res.status(401).json({
        success: false,
        message: "Unauthorized: No token provided"  
        });
        return;
    } 

    next();
}

export default auth;