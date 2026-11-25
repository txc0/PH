import { Request, Response, NextFunction } from "express";
import fs from "fs";


const logger = ((req: Request, res: Response, next: NextFunction) => {
  //console.log("Method -> URL -> Time", req.method, req.url, Date.now());

  const log =  `\n Method -> URL -> Time: ${req.method} | ${req.url} | ${new Date().toISOString()}\n`;
  console.log(log);
  fs.appendFile("logger.txt",log, (err) =>{
    console.log(err);
  })
  next();
})

export default logger;