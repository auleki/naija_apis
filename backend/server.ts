import express, {Express} from 'express'
import * as dotenv from 'dotenv'
dotenv.config()
import morgan from 'morgan'
import apiBPRoutes from './api_bp/api_bp.route'
import {connectToDB} from "./db/connect";

const app: Express = express()

// MORGAN Console Logger
app.use(morgan('dev'))
app.use(express.json())

const PORT: string | number = process.env.PORT || 3000

//app.use('/', (req: Request, res: Response) => res.json('hi'))
app.use('/api-bp', apiBPRoutes)

export const startServer = () => {
    app.listen(PORT, (): void => console.log('Server up @ http://localhost:' + PORT))
}

connectToDB()
export default app