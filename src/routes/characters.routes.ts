import { Router } from 'express'
import { listCharacters } from '../controllers/characters/list'

const router = Router()

router.get('/', listCharacters)

export default router