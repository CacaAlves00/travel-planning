import { Application, Request, Response, Router } from 'express'

abstract class Controller {
    protected readonly router: Router

    constructor() {
        this.router = Router()
    }

    protected abstract route(app: Application): void
}

export default Controller