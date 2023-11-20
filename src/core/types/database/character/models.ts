type CharacterOriginType = 'unknown' | ''
type CharacterStatusType = 'Alive' | ''
type CharacterSpecieType = 'Human' | ''
type CharacterGenderType = 'Male' | 'Female'

export type CharacterLocation = {
  name: string,
  url: string
}

export type CharacterOrigin = {
  name:CharacterOriginType,
  url: string
}

export type CharacterInfo = {
  count: number,
  pages: number,
  next: string | null,
  prev: string | null
}

export type CharacterEntity = {
  id: number,
  name: string,
  status: CharacterStatusType,
  species: CharacterSpecieType,
  type: string,
  gender: CharacterGenderType,
  origin:CharacterOrigin,
  location:CharacterLocation,
  image: string,
  episode: string[],
  url: string,
  created: string | Date
}