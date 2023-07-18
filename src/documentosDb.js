import { documentos } from "./dbConnect.js";

function encontrarDocumento(nome) {
    const conversa = documentos.findOne({nome})
    
    return conversa
}

function atualizaDocumento(nome, texto) {
    
    try {

        const atualizacao = documentos.updateOne({
            nome
        },{
            $set:{
                texto,
            },
        })
        
        return atualizacao
        
    } catch (error) {
        console.log(error);
    }

    

}


export {encontrarDocumento, atualizaDocumento}