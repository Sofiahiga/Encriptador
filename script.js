const texto = document.querySelector("textarea");
const btn = document.querySelector(".encriptar");
const secreto = document.querySelector(".secreto");
const esconder = document.querySelector(".esconder");
const codigo = document.querySelector(".codigo");
const codificado = document.querySelector(".codificado");
const btn2= document.querySelector(".desencriptar");
const btnCopiar = document.querySelector(".copiar");
const letrasPermitidas= " abcdefghijklmnñopqrstuvwxyz";
const restriccion = document.querySelector(".restriccion");


function validarTexto() {
    for (let i=0; i<letrasPermitidas.length; i++) {
        if (letrasPermitidas.indexOf(texto.value.charAt(i)) == -1) {
            return (true);
        } 

    }
}



function encriptar() {
    if (validarTexto()) {
        restriccion.style.color="red";
        esconder.style.display="block";
        codificado.style.display="none"

    } else {
        if (texto.value != '') {
            let textoEncriptado= texto.value.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
            secreto.innerHTML=textoEncriptado;
            esconder.style.display="none";
            codigo.style.justifyContent="flex-start";
            codificado.style.display="block";
            restriccion.style.color="green";
        } else {
            esconder.style.display="block";
            codificado.style.display="none";
            restriccion.style.color="black";
        }

    }
    


    
}

function desencriptar() {
    if (validarTexto()) {
        restriccion.style.color="red";
        esconder.style.display="block";
        codificado.style.display="none"

    } else {
        if (texto.value != '') {
            let textoDesencriptado= texto.value.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
            secreto.innerHTML=textoDesencriptado;
            esconder.style.display="none";
            codigo.style.justifyContent="flex-start";
            codificado.style.display="block";
            } else {
                esconder.style.display="block";
                codificado.style.display="none";
                restriccion.style.color="black";
            }
    }

}

function copiado() {
    navigator.clipboard.writeText(secreto.innerHTML)
}

btn.addEventListener("click",encriptar); 
btn2.addEventListener("click",desencriptar);
btnCopiar.addEventListener("click",copiado); 