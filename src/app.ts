import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { routes } from './routes'

const app = express()

app.use(express.json())
app.use(routes)
app.use(
   (err: Error, 
    req: Request, 
    res: Response, 
    next: NextFunction) => {
      if (err instanceof Error) {
        return res.status(400).json({
          error: err.message
        }) 
      }

      return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
      })
    }
  )

app.listen(3090, () => console.log('Server is up running!'))