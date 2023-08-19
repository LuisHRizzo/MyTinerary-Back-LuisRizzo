import 'dotenv/config.js'
import express from "express"
import './config/database.js'
import indexRouter from "./router/indexRouter.js"
import cors from 'cors'

const server = express()

server.use(cors())
server.use(express.json())

server.use('/api', indexRouter)


server.get('/', (require, response, next)=>{
    response.send('Bienvenidos a Mytinerary')
})

server.listen(3000, ()=>{console.log("Servidor corriendo en puerto 3000")})

