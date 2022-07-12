import connect from "../../../util/mongo";

export default async function handler(req, res) {
    const {
        method,
        query: { id },
        cookies
    } = req;

    const { db } = await connect()

    const musculacao = await db.collection("musculacao").findOne({ id: id })
    const spinning = await db.collection("spinning").findOne({ id: id })
    const ritmos = await db.collection("ritmos").findOne({ id: id })
    const crossfit = await db.collection("crossfit").findOne({ id: id })
    const natacao = await db.collection("natacao").findOne({ id: id })

    let response; 

    if(musculacao) {
        response = musculacao;
    } else if (spinning) {
        response = spinning;
    } else if (ritmos) {
        response = ritmos;
    } else if (crossfit) {
        response = crossfit;
    } else if (natacao) {
        response = natacao;
    }

    res.status(200).json(response);
}