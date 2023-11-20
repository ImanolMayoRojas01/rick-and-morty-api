import { ResponseStatus } from "../core/types/app/response";

export const EXCEPTION_NOT_DATA_PROVIDER: ResponseStatus = {
  httpCode: 200,
  success: false,
  code: '0001',
  message: 'The necessary data was not sent'
}

/* Aplicar cuando ocurre un error general por parte del servidor o algun servicio externo */
export const ERROR_SERVER = (httpCode: number, message: string): ResponseStatus => ({
  httpCode,
  message,
  success: false,
  isServerFailure: true
})
