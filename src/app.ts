import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'

import characterRouter from './routes/characters.routes'

const app = express()
// Plugins
app.use(morgan('dev'))

app.use(cors({
  origin:'*', 
  credentials:true
}))

app.use(express.json())
app.set('view engine', 'hbs');
app.use('/public', express.static(path.join(__dirname, 'public')));

// ROUTES
app.use('/character', characterRouter)

export default app