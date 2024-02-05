// Importa as question, alternatives, e opção (alternatives) correta: index_correct_question;
import dataQuiz from "./assets/data.js";

// -----------------------------------------------------------------
// Trata-se de pomtuação, correção das questões:
function score (score_pontos) {
    console.log("Pontos: ", score_pontos)
};

// Função correct_question - Adiciona um atributo nas alternativas, sendo que o atributo é um index dos buttons existentes, quando clicados eles retornam um index para o Js.
function correct_question () {
    let index_correct = document.querySelectorAll('.alternatives');
    // O onclick vai ligar o botão clicado que é o atual, passando o valor para a função que valida a escolha:
    index_correct.forEach(function (index_correct_question_atual) {
        index_correct_question_atual.onclick = () => {
            // Função score - Pega o valor da alternativa clicada:
            score (parseInt(index_correct_question_atual.getAttribute('data-index')));
        };
    });
};

// ------------------------------------------------------------
// Variaveis de controle global, responsaveis por controlar as alternativas e quetões, além de controlar erros de index não existente na array importada;
let index = 0;
let i = 0;

// Adiciona a descrição da questão:
function indexQuestion (index) {
    document.getElementById('quiz').innerHTML = `<h2>${dataQuiz[index].question}</h2>`;
};
// Deixa a div com id quiz sem tags (Elementos):
function removeAlternatives (alternativesOps) {
    alternativesOps.innerHTML = '';
};

// Função ops - Adiciona as alternatives no HTML:
function ops (index) {
    let alternativesOps = document.getElementById('quiz');
    // Teste de acesso as 'alternativesOps':
    // alternativesOps.innerHTML = dataQuiz[index].alternatives.length;

    //Função removeAlternatives - Deixa a div com id 'quiz' sem tags incialmente (Elementos) quando chamada:
    removeAlternatives (alternativesOps);
    // Função indexQuestion - Chama e adiciona a descrição da alternativa;
    indexQuestion (index);

    // Adiciona pelo Index da array importada as alternativas:
    while (i < dataQuiz[index].alternatives.length) {
        // Adiciona os buttons com class e id para processar a correção:
        alternativesOps.innerHTML += `<button class="alternatives" id="index_correct" data-index="${i}">${dataQuiz[index].alternatives[i]}</button>`;
        i++;
    };
    // Função correct_question - Valida as alternativas:
    correct_question ();
};

// Função next - Pula para proxima pergunta:
function next () {
    i = 0;
    // Verifica se as 'question' acabaram na array importada linha:01:
    if (index <= (dataQuiz.length - 1)) {
        ops(index);
        index++;
    };
};
// Inicio - Acessa o id 'next', chamando a função usando 'onclick';
document.getElementById('next').onclick = next;

// -----------------------------------------------------------------