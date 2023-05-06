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

    route(router: Router) {

        router.use('/travel', this.router)

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
                const data = await this.service.createOne(req.body)
                res.status(201).json({ data })

            } catch (error: any) {
                res.status(500).json({ error: error.message })
            }
        })

        this.router.put('/:id', async (req: Request, res: Response) => {
            try {
                await this.service.updateOne(req.params.id, req.body)
                res.sendStatus(204)

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
                await this.service.deleteOne(req.params.id)
                res.sendStatus(204)

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