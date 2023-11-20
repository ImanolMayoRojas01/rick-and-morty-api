export type SortOrderType = 'asc' | 'desc'

export type GetOptionQuery = {
  columnsExclude?: string[]
  columns?: string[]
  orders?: [string, SortOrderType][]
}

export type QueryResponseType<Payload> = {
  payload?: Payload,
  errorMessage?: string
}