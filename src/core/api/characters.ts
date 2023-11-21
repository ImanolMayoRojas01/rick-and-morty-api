import { API } from "../../config/axios";
import { QueryResponseType } from "../types/app/app.types";
import { CharacterRepository, GetCharactersParams, GetCharactersPayload } from "../types/database/character/repository";

export class CharacterGraphqlRepository implements CharacterRepository {
  async getCharacters(params: GetCharactersParams): Promise<QueryResponseType<GetCharactersPayload>> {
    try {
      let search = ''
      let page = ''

      if (params.name) search = `name:"${params.name}"`
      if (params.page) page = `page:${params.page}`

      const { data } = await API.post(`/`, {
        query: `{
          characters(${page}, filter: { ${search} }) {
            info {
              count
              pages
            }
            results {
              name
              image
              species
              gender
            }
          }
        }`
      })

      const response = data.data

      return {
        payload: {
          total: response.characters.info.count,
          countPages: response.characters.info.pages,
          currentPage: params.page || 0,
          // next: data.info.next,
          // prev: data.info.prev,
          characters: response.characters.results
        }
      }
    } catch (error: any) {
      console.log('ERROR [CharacterExternalRepository -> getCharacters] : ', error)
      return { errorMessage: error.message }
    }
  }
}
