import connect from '../../../util/mongo'

export default async function handler(req, res) {
    const {db} = await connect()

    const modalidades = await db.collection("modalidades").find().toArray()
    const response = [modalidades]

    res.status(200).json(response)
}
  