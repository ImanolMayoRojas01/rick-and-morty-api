import { Request, Response } from "express"
import { RequestCallback, RequestCallbackTemplate } from "../core/types/app/controller"

export const ControllerBase = <T>(callback: RequestCallback<T>) => {
  return async (req: Request, res: Response) => {
    const { httpCode, success, code, message, payload, isServerFailure } = await callback(req, res)
    res.status(httpCode).json({ httpCode, code, message, success, payload, isServerFailure })
  }
}

export const ControllerBaseTemplate = (callback: RequestCallbackTemplate) => {
  return async (req: Request, res: Response) => {
    const { template, httpCode } = await callback(req)
    res.status(httpCode).send(template)
  }
}