import NotFoundError from '../util/errors/NotFoundError';
import Travel from './model';

class TravelService {
    deleteOne(id: string) {
        throw new Error('Method not implemented.');
    }
    updateOne(id: string) {
        throw new Error('Method not implemented.');
    }
    createOne(): Travel  {
        throw new Error('Method not implemented.');
    }


    findOne(id: string): Travel {
        if (id === '1')
            throw new NotFoundError('The requested resource was not found.')
        return {
            id: 1,
            cities: []
        }
    }
    findAll(): Travel[] {
        return [{
            id: 1,
            cities: []
        }]
    }

}

export default TravelService