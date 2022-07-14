import connect from "../../../util/mongo";

export default async function handler(req, res) {
    const {
        method,
        query: { id },
        cookies
    } = req;

    const { db } = await connect()

    const modalidades = await db.collection("modalidades").findOne({ id: id })

    let response; 

    if(modalidades) {
        response = modalidades;
    }

    res.status(200).json(response);
}