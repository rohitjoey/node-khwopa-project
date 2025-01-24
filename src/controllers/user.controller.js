import { StatusCodes } from "http-status-codes";
import {
  loginUserService
} from "../services/user.service.js";

export const userLoginController = async (req, res) => {
  console.log(req)
  const data = await loginUserService(req.body);
  res.status(StatusCodes.ACCEPTED).json(data);
};  
