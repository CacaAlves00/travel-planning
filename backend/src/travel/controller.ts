import { Application, Request, Response, Router } from 'express'
import Controller from '../util/classes/Controller'
import TravelService from './service'
import NotFoundError from '../util/errors/NotFoundError'


class TravelController extends Controller {

    private readonly service: TravelService

    constructor() {
        super()

        this.service = new TravelService()
    }

    route(app: Application) {

        app.use('/travel', this.router)

        this.router.get('/', async (req: Request, res: Response) => {
            try {
                const data = await this.service.findAll()
                res.status(200).json({ data })

            }
            catch (error: any) {
                res.status(500).json({ error: error.message })
            }
        })

        this.router.get('/:id', async (req: Request, res: Response) => {
            try {
                const data = await this.service.findOne(req.params.id)
                res.status(200).json({ data })
            }
            catch (error: any) {
                if (error instanceof NotFoundError) {
                    res.sendStatus(404)
                } else {
                    res.status(500).json({ error: error.message })
                }
            }
        })

        this.router.post('/', async (req: Request, res: Response) => {
            try {
                const data = await this.service.createOne()
                res.status(201).json({ data })

            } catch (error: any) {
                res.status(500).json({ error: error.message })
            }
        })

        this.router.put('/:id', async (req: Request, res: Response) => {
            try {
                const data = await this.service.updateOne(req.params.id)
                res.status(200).json({ data })

            } catch (error: any) {
                if (error instanceof NotFoundError) {
                    res.sendStatus(404)
                } else {
                    res.status(500).json({ error: error.message })
                }
            }
        })

        this.router.delete('/:id', async (req: Request, res: Response) => {
            try {
                const data = await this.service.deleteOne(req.params.id)
                res.status(200).json({ data })

            } catch (error: any) {
                if (error instanceof NotFoundError) {
                    res.sendStatus(404)
                } else {
                    res.status(500).json({ error: error.message })
                }
            }
        })
    }
}

export default TravelController