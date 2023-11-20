import { API } from "../../config/axios";
import { QueryResponseType } from "../types/app/app.types";
import { CharacterEntity } from "../types/database/character/models";
import { CharacterRepository, GetCharactersParams, GetCharactersPayload } from "../types/database/character/repository";
import { ApolloServer, gql } from 'apollo-server-express'
import fetch from 'node-fetch'

export class CharacterGraphqlRepository implements CharacterRepository {
  async getCharacters(params: GetCharactersParams): Promise<QueryResponseType<GetCharactersPayload>> {
    try {
      const {data} = await API.get(`/character/?page=${params.page}`)

      return {
        payload: {
          total: data.info.count,
          countPages: data.info.pages,
          currentPage: params.page || 0,
          // next: data.info.next,
          // prev: data.info.prev,
          characters: data.results
        }
      }
    } catch (error: any) {
      console.log('ERROR [CharacterExternalRepository -> getCharacters] : ', error)
      return { errorMessage: error.message }
    }
  }
}
