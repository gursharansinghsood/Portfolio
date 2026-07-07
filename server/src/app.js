import express from 'express'
import morgan from 'morgan'
import config from './config/config.js'
import emailRoute from './routes/email.route.js'
import cors from 'cors'

const app = express()


app.use(morgan('dev'))
app.use(cors({
    origin: config.clientUrl
}))
app.use(express.json())


app.use('/email', emailRoute)


export default app