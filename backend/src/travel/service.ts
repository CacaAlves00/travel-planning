import NotFoundError from '../util/errors/NotFoundError';
import Travel from './model';
import TravelRepository from './repository';

class TravelService {

    private readonly repository: TravelRepository

    constructor() {
        this.repository = new TravelRepository()
    }

    async deleteOne(id: string) {
        await this.repository.deleteOne(id)
    }
    async updateOne(id: string, travel: Travel) {
        await this.repository.updateOne(id, travel)
    }
    async createOne(travel: Travel): Promise<Travel> {
        return await this.repository.createOne(travel)
    }

    async findOne(id: string): Promise<Travel> {
        return await this.repository.findOne(id)
    }

    async findAll(): Promise<Travel[]> {
        return await this.repository.findAll()
    }

}

export default TravelService