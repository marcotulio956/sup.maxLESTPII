import connect from '../../../util/mongo'

export default async function handler(req, res) {
    const {db} = await connect()

    const musculacao = await db.collection("musculacao").find().toArray()
    const spinning = await db.collection("spinning").find().toArray()
    const natacao = await db.collection("natacao").find().toArray()
    const crossfit = await db.collection("crossfit").find().toArray()
    const ritmos = await db.collection("ritmos").find().toArray()
    const response = [musculacao, spinning, natacao, crossfit, ritmos]

    res.status(200).json(response)
}
  