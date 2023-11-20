export type ResponseStatus = {
  httpCode: number
  success: boolean
  code?: string
  message?: string
  isServerFailure?: boolean
}