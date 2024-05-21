import { scrollSuave } from "./scroll.js";

let textInicio = 'Inicio';
let textTrabalhos = 'Trabalhos';

const mensagemContainer = document.querySelector('.navtext');
const inovacoesContainer = document.querySelector('#inovacoes')
const hireMeButtons = document.querySelectorAll('.hire-me');
// Adicionando event listeners para os botões
mensagemContainer.addEventListener('click', function() {
    scrollSuave('#home')
});

mensagemContainer.addEventListener('click', function() {
    scrollSuave("#works")
});

inovacoesContainer.addEventListener('click', function(){
    scrollSuave("#works")
})

hireMeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var url = 'https://wa.me/5584986717880';
        window.open(url, '_blank');
    });
})

window.addEventListener('scroll', function() {
    // Esta função será executada sempre que ocorrer o evento 'scroll'
    const scrollPageY = window.scrollY;
    mensagemContainer.innerHTML = scrollPageY >= window.innerHeight ? textInicio : textTrabalhos;
});

