import { QueryResponseType } from "../../app/app.types"
import { CharacterEntity, CharacterInfo } from "./models"

export type GetCharactersParams = {
  limit?: number
  page?: number
  name?: string
}

export type GetCharactersPayload = {
  characters: CharacterEntity[]
  currentPage: number
  total: number
  countPages: number
}

export interface CharacterRepository {
  getCharacters(params:GetCharactersParams): Promise<QueryResponseType<GetCharactersPayload>>
}