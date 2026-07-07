import { Router } from "express";
import { sendEmailController } from "../controllers/email.controller.js";


const emailRoute = Router()


emailRoute.post('/send', sendEmailController)


export default emailRoute