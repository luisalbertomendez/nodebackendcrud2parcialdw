import express from "express"
import cors from 'cors'
// importar la conexión a db
import db from "./database/db.js"

// importamos nuestro enrutador
import blogRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express. json())
app.use('/blogs', blogRoutes)

try {
    db.authenticate()
    console.log('Conexión exitosa a la db')
} catch (error) {
    console.log(`El error de conexión es ${error}`)
}



/* app.get('/',(req, res)=>{
    res.send('HOLA MUNDO')

}) */

app.listen(8000, () =>{
    console.log('Server UP running in http://localhost:8000/')
})
