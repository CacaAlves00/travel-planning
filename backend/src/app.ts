import express, { Application, Router, Request, Response } from 'express'
import TravelController from './travel/controller'

const app = express()
app.use(express.json())

const apiRouter = Router()
app.use('/api/v1', apiRouter)

function setUpControllers() {

  const controllers = [TravelController]

  for (let Controller of controllers) {
    const controller = new Controller()
    controller.route(apiRouter)
  }
}

setUpControllers()

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('Server started on port 3000')

  app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World !')
  })
})
