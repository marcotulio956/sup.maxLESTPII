import connect from '../../../util/mongo'

export default async function handler(req, res) {
    const {db} = await connect()

    const usuarios = await db.collection("usuarios").find().toArray()
    const response = [usuarios]

    res.status(200).json(response)
}
  