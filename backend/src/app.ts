import express, { Application, Router, Request, Response } from 'express'
import cors from 'cors'
import TravelController from './travel/controller'
import * as dotenv from 'dotenv'
import path from 'path'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const apiRouter = Router()
app.use('/api/v1', apiRouter)

function setUpControllers() {

  const controllers = [TravelController]

  for (let Controller of controllers) {
    const controller = new Controller()
    controller.route(apiRouter)
  }
}

function setUpIndexHtmlServing() {
  // Serve static files from the React build folder
  app.use(express.static(path.join(__dirname, './../../frontend/build')))

  // Handle other API routes or endpoints
  // ...

  // Serve the index.html file as the entry point for your React app
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, './../../frontend/build', 'index.html'))
  })
}

setUpControllers()
setUpIndexHtmlServing()


const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Server started on port ${port}`)

})
