// Variables globales
let textoEntrada = document.getElementById('texto-entrada');
let textoSalida = document.getElementById('texto-salida');
let btnEncriptar = document.getElementById('btn-encriptar');
let btnDesencriptar = document.getElementById('btn-desencriptar');
let btnCopiar = document.getElementById('btn-copiar');
let btnReiniciar = document.getElementById('btn-reiniciar');

// Función para encriptar
function encriptar() {
    let texto = textoEntrada.value;
    let textoEncriptado = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == 'a') {
            textoEncriptado += 'ai';
        } else if (texto[i] == 'e') {
            textoEncriptado += 'enter';
        } else if (texto[i] == 'i') {
            textoEncriptado += 'imes';
        } else if (texto[i] == 'o') {
            textoEncriptado += 'ober';
        } else if (texto[i] == 'u') {
            textoEncriptado += 'ufat';
        } else {
            textoEncriptado += texto[i];
        }
    }

    mostrarResultado(textoEncriptado);
}

// Función para desencriptar
function desencriptar() {
    let texto = textoEntrada.value;
    let textoDesencriptado = texto.replace(/ai/g, 'a')
                                  .replace(/enter/g, 'e')
                                  .replace(/imes/g, 'i')
                                  .replace(/ober/g, 'o')
                                  .replace(/ufat/g, 'u');

    mostrarResultado(textoDesencriptado);
}

// Función para mostrar el resultado
function mostrarResultado(texto) {
    textoSalida.value = texto;
    textoSalida.style.display = 'block';
    btnCopiar.style.display = 'block';
    btnReiniciar.style.display = 'block';
    document.querySelector('.mensaje-vacio').style.display = 'none';
    document.querySelector('.subtitulo-vacio').style.display = 'none';
    document.getElementById('imagen-muneco').style.display = 'none';
}

// Función para copiar el texto
function copiarTexto() {
    textoSalida.select();
    document.execCommand('copy');
    alert('Texto copiado!');
}

// Función para reiniciar la página
function reiniciarPagina() {
    textoEntrada.value = '';
    textoSalida.value = '';
    textoSalida.style.display = 'none';
    btnCopiar.style.display = 'none';
    btnReiniciar.style.display = 'none';
    document.querySelector('.mensaje-vacio').style.display = 'block';
    document.querySelector('.subtitulo-vacio').style.display = 'block';
    document.getElementById('imagen-muneco').style.display = 'block';
}

// Event listeners
btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiarTexto;
btnReiniciar.onclick = reiniciarPagina;

// Función para limpiar el área de resultado
textoEntrada.oninput = function() {
    textoSalida.style.display = 'none';
    btnCopiar.style.display = 'none';
    btnReiniciar.style.display = 'none';
    document.querySelector('.mensaje-vacio').style.display = 'block';
    document.querySelector('.subtitulo-vacio').style.display = 'block';
    document.getElementById('imagen-muneco').style.display = 'block';
};