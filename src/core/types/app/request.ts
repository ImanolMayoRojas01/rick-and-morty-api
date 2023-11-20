import { Request } from "express";
import { UserToken } from "./token"; 

export interface AuthRequest extends Request {
  user?: UserToken
}