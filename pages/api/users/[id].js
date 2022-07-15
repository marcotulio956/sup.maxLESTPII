import connect from "../../../util/mongo";

export default async function handler(req, res) {
    const {
        method,
        query: { id },
        cookies
    } = req;

    const { db } = await connect()

    const modalidades = await db.collection("usuarios").findOne({ id: id })

    if(modalidades) {
        res.status(200).json(modalidades);
    }
}