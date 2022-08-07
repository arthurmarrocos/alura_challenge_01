const textarea = document.querySelector('textarea');

function encrypt() {

    const texto = textarea.value;
    const separador = texto.split('');
    const recebeTexto = [];

    for (let i = 0; i < separador.length; i++) {
        let mostra = separador[i]

        if (mostra === "e") {
            mostra = "enter";
        } else if (mostra === "i") {
            mostra = "imes";
        } else if (mostra === "a") {
            mostra = "ai";
        } else if (mostra === "o") {
            mostra = "ober";
        } else if (mostra === "u") {
            mostra = "ufat";
        } 

        recebeTexto.push(mostra)

    }

    const conteudo = document.querySelector('.text_conteudo');
    conteudo.style.display = "block";
    const apareceNaTela = document.querySelector('#apareceNaTela').innerHTML = recebeTexto.join('');

    document.querySelector('.message').innerHTML = '';

    const apareceButton = document.querySelector('.copiar');
    apareceButton.style.visibility = "visible";

    textarea.focus();

    return apareceNaTela;

}

const button1 = document.getElementById('encrypt');
button1.onclick = encrypt;
textarea.focus();

function decrypt() {

    let texto = textarea.value;
    texto = texto.split('ai').join('a');
    texto = texto.split('enter').join('e');
    texto = texto.split('imes').join('i');
    texto = texto.split('ober').join('o');
    texto = texto.split('ufat').join('u');

    document.querySelector('#apareceNaTela').innerHTML = texto;
    document.querySelector('.message').innerHTML = '';
    const apareceButton = document.querySelector('.copiar');
    apareceButton.style.visibility = "visible";
    textarea.value = "";
    textarea.focus();

    return texto;

}

const button2 = document.getElementById('decrypt');
button2.onclick = decrypt;

function copy() {

    const text = document.querySelector('.recebe_text');
    text.select();
    text.setSelectionRange(0, 10000);
    navigator.clipboard.writeText(text.value);
    textarea.value = "";

}

















