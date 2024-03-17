
//* La letra "e" es convertida para "enter" */
//* La letra "i" es convertida para "imes" */
//* La letra "a" es convertida para "ai" */
//* La letra "o" es convertida para "ober" */
//* La letra "u" es convertida para "ufat" */

let mensaje = document.querySelector('.mensaje');
let textArea = document.querySelector('.textarea');


function btnEncriptar( ) {
    let textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = '';
    mensaje.style.backgroundImage = 'none';
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
    stringEncriptado = stringEncriptado.tolowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function btnDesencriptar( ) {
    let textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = '';
    
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
    stringDesencriptado = stringDesencriptado.tolowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}