import { MongoClient } from "mongodb";

const cliente = new MongoClient("----String conection aqui ------")
let documentos
try {
    await cliente.connect()

    const db = cliente.db("--Banco--")

    documentos = db.collection("---colection---")

    console.log("conectao ao banco de dados com sucesso!");

} catch (error) {
    console.log(error);
}

export { documentos }