import io from "./server.js";
import {encontrarDocumento, atualizaDocumento} from "./documentosDb.js"



io.on("connection", (socket)=>{
    console.log("um cliente se conectou!!  ", socket.id);

    socket.on("selecionar_documento", async(nomeDoDocumento, callcack)=>{
        socket.join(nomeDoDocumento);
        const documento = await encontrarDocumento(nomeDoDocumento)
       // socket.emit("texto_documento", documento.texto)

       callcack(documento.texto)

    })

    socket.on("texto_editor", async ({ nomeDocumento, texto })=>{
        
        ///socket.broadcast.emit("texto_editor_para_clientes", texto)

        const documento = await atualizaDocumento(nomeDocumento, texto)


        if(documento.modifiedCount){

            socket.to(nomeDocumento).emit("texto_editor_para_clientes", texto)
        }
    
       

    })

})

