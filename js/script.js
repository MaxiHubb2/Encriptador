document.getElementById('encrypt-button').addEventListener('click', encriptarTexto);
document.getElementById('decrypt-button').addEventListener('click', desencriptarTexto);
document.getElementById('copy-button').addEventListener('click', copiarTexto);

function encriptarTexto() {
    const inputText = document.getElementById('input-text').value;
    if (esTextoValido(inputText)) {
        const encryptedText = encriptar(inputText);
        mostrarResultado(encryptedText);
    } else {
        alert('El texto contiene mayúsculas o caracteres especiales no permitidos (excepto el signo de exclamación).');
    }
}

function desencriptarTexto() {
    const inputText = document.getElementById('input-text').value;
    if (esTextoValido(inputText)) {
        const decryptedText = desencriptar(inputText);
        mostrarResultado(decryptedText);
    } else {
        alert('El texto contiene mayúsculas o caracteres especiales no permitidos (excepto el signo de exclamación).');
    }
}

function copiarTexto() {
    const outputText = document.querySelector('.output-message').textContent;
    if (outputText) {
        navigator.clipboard.writeText(outputText).then(() => {
            alert('Texto copiado al portapapeles.');
        }).catch(err => {
            alert('Error al copiar el texto: ', err);
        });
    }
}

function esTextoValido(texto) {
    const regex = /^[a-z\s!]*$/; 
    return regex.test(texto);
}

function mostrarResultado(texto) {
    const outputMessage = document.querySelector('.output-message');
    outputMessage.textContent = texto;
}

function encriptar(texto) {
    let textoEncriptado = '';
    for (let i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case 'e':
                textoEncriptado += 'enter';
                break;
            case 'i':
                textoEncriptado += 'imes';
                break;
            case 'a':
                textoEncriptado += 'ai';
                break;
            case 'o':
                textoEncriptado += 'ober';
                break;
            case 'u':
                textoEncriptado += 'ufat';
                break;
            default:
                textoEncriptado += texto[i];
                break;
        }
    }
    return textoEncriptado;
}

function desencriptar(texto) {
    let textoDesencriptado = texto;
    textoDesencriptado = textoDesencriptado.replace(/enter/g, 'e')
                                           .replace(/imes/g, 'i')
                                           .replace(/ai/g, 'a')
                                           .replace(/ober/g, 'o')
                                           .replace(/ufat/g, 'u');
    return textoDesencriptado;
}
