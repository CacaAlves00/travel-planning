import Datastore from 'nedb'
import { nanoid } from 'nanoid'
import NotFoundError from '../util/errors/NotFoundError'
import Travel from './model'

class TravelRepository {
  private readonly db: Datastore<Travel>

  constructor() {
    this.db = new Datastore<Travel>({
      filename: './travels.db',
      autoload: true,
    })
  }

  async deleteOne(id: string): Promise<void> {
    const numRemoved = await new Promise<number>((resolve, reject) => {
      this.db.remove({ _id: id }, {}, (err, numRemoved) => {
        resolve(numRemoved)
        reject(err)
      })
    })

    if (numRemoved === 0)
      throw new NotFoundError(`Travel with id ${id} not found`)

  }

  async updateOne(id: string, data: Partial<Travel>): Promise<void> {
    const numReplaced = await new Promise<number>((resolve, reject) => {
      this.db.update({ _id: id }, { $set: data }, {}, (err, numReplaced) => {
        resolve(numReplaced)
        reject(err)
      })
    })

    if (numReplaced === 0) {
      throw new NotFoundError(`Travel with id ${id} not found`)
    }
  }

  async createOne(travel: Travel): Promise<Travel> {
    const newTravel = { ...travel, _id: nanoid() }
    return new Promise((resolve, reject) => {
      this.db.insert(newTravel, (err, doc) => {
        if (err) {
          reject(err)
        } else {
          resolve(doc)
        }
      })
    })
  }

  async findOne(id: string): Promise<Travel> {
    return new Promise((resolve, reject) => {
      this.db.findOne({ _id: id }, (err, doc) => {
        if (err) {
          reject(err)
        } else if (!doc) {
          reject(new NotFoundError(`Travel with id ${id} not found`))
        } else {
          resolve(doc)
        }
      })
    })
  }

  async findAll(): Promise<Travel[]> {
    return new Promise((resolve, reject) => {
      this.db.find({}, {}, (err, doc) => {
        if (err) {
          reject(err)
        } else {
          resolve(doc)
        }
      })
    })
  }
}

export default TravelRepository
