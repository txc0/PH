import Router from "express";
import { authController } from "./auth.controller";

const router = Router();

const authRoute = router;

router.post("/login",authController.loginUSer);

export { authRoute };
