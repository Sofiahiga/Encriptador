const texto = document.querySelector("textarea");
const btn = document.querySelector(".encriptar");
const secreto = document.querySelector(".secreto");
const esconder = document.querySelector(".esconder");
const codigo = document.querySelector(".codigo");
const codificado = document.querySelector(".codificado");
const btn2= document.querySelector(".desencriptar");
const btnCopiar = document.querySelector(".copiar");

function encriptar() {
    if (texto.value != '') {
        let textoEncriptado= texto.value.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
        secreto.innerHTML=textoEncriptado;
        esconder.style.display="none";
        codigo.style.justifyContent="flex-start";
        codificado.style.display="block";
    } else {
        esconder.style.display="block";
        codificado.style.display="none";
    }


    
}

function desencriptar() {
    if (texto.value != '') {
    let textoDesencriptado= texto.value;
    secreto.innerHTML=textoDesencriptado;
    codigo.style.justifyContent="flex-start";
    codificado.style.display="block";
    } else {
        esconder.style.display="block";
        codificado.style.display="none";
    }
}

function copiado() {
    navigator.clipboard.writeText(secreto.innerHTML)
}

btn.addEventListener("click",encriptar); 
btn2.addEventListener("click",desencriptar);
btnCopiar.addEventListener("click",copiado);