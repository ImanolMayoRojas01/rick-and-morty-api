import { AuthRequest } from "./request";
import { ResponseStatus } from "./response";
import { Response } from "express";

type RequestType<T> = ResponseStatus & { payload?: T }
type RequestTypeTemplate = { httpCode: number, template: string }

export type RequestCallback<T> = (
  req: AuthRequest,
  res: Response
) => Promise<RequestType<T>>

export type RequestCallbackTemplate = (
  req: AuthRequest
) => Promise<RequestTypeTemplate>