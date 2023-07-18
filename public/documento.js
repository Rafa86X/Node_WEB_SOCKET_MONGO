import { emitirTextoEditor, selecionarDocumento } from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome")

const pegaNomeDocumentoAtul = document.getElementById("titulo").text = nomeDocumento
document.getElementById("titulo-documento").textContent = nomeDocumento

selecionarDocumento( pegaNomeDocumentoAtul )

const textoEditor = document.getElementById("editor-texto");

textoEditor.addEventListener("keyup", ()=>{
    emitirTextoEditor({
        texto : textoEditor.value, 
        nomeDocumento
    })
})

function atualizaTextoEditor(texto){
    textoEditor.value = texto
}

export { atualizaTextoEditor }