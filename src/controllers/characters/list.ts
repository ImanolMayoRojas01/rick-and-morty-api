import { CharacterGraphqlRepository } from "../../core/api/characters";
import { ControllerBase } from "../../utils/controllerBase";
import { ERROR_SERVER, EXCEPTION_NOT_DATA_PROVIDER } from "../../utils/response-codes";

export const listCharacters = ControllerBase(
  async (req) => {
    const { limit, page, search } = req.query
    
    if (!limit || !page) return EXCEPTION_NOT_DATA_PROVIDER

    const { payload: character, errorMessage } = await new CharacterGraphqlRepository().getCharacters({
      limit: limit ? Number(limit) : undefined,
      page: page ? Number(page) : undefined
    })

    if (!character) return ERROR_SERVER(500, errorMessage as string)

    return {
      success: true,
      httpCode: 200,
      payload: character
    }
  }
)