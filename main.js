// Importa as question, alternatives, e opção (alternatives) correta: index_correct_question;
import dataQuiz from "./assets/data.js";

// Variaveis de controle global, responsaveis por controlar as alternativas e quetões, além de controlar erros de index não existente na array importada;
let index = 0; // contador principal das question, alternatives;
let i = 0; // Contador principal global (while);
let array_data = []; // Amazena os dados por indixes (question, alternatives);
let sorteArray = []; // Amazena indixes por números;

// -----------------------------------------------------------------



// -----------------------------------------------------------------
// Função sorte_question - Sorteia números baseado no tamanho do dataQuiz;
const sorte_question = () => {
    while (sorteArray.length < dataQuiz.length) {
        let num = Math.floor(Math.random () * dataQuiz.length) + 1;
        if (!sorteArray.includes (num)) {
            sorteArray.push(num);
        };
    };
    return sorteArray;
}; let index_1 = sorte_question();
// Abaixo testes;
console.log(sorte_question()); // Test de sorte!
console.log(dataQuiz[sorteArray[index]].question);

// -----------------------------------------------------------------
// Função end_quiz_fim - Faz a analise dos dados que foram coletados na 'array_data', e demostra as alternativas que o usuario marcou correta ou certa assim escolha;
const end_quiz_fim = () => {
    let play_quest = document.getElementById('quiz');
    play_quest.innerHTML = '';
    let i = 0;
    
    while (i < array_data.length) {
        if (array_data[i] && array_data[i].ops) {
            play_quest.innerHTML += `<h3>${dataQuiz[array_data[i].quest].question}</h3>`;
            if (array_data[i].ops == dataQuiz[i - 1].index_correct_question) {
                play_quest.innerHTML += `<p><span>Correta:</span> ${dataQuiz[array_data[i].quest].alternatives[array_data[i].ops]}</p>`;
            } else {
                play_quest.innerHTML += `<p><span>Errada:</span> ${dataQuiz[array_data[i].quest].alternatives[array_data[i].ops]}</p>`;
            }
        } else {
            console.log("???");
        }
        i++;
    }
};

// Função finalizar - Troca o valor do 'onclick' por outro, afim de mostrar ao jogador as alternativas corretas;
function finalizar () {
    let end_quiz = document.getElementById('outro');
    end_quiz.innerHTML = "FINALIZAR!";
    end_quiz.onclick = end_quiz_fim;
    // Zera o contador para finalizar...
};

// -----------------------------------------------------------------
// Trata-se de pontuação, correção das questões:
// O parametro 'score_pontos' responsavel por bloquear e anular quetão sem alternativa escolhida, além de repassar o valor da questão atual;
function score (score_pontos) {
    // Teste de validação abaixo;
    // console.log("Pontos: ", score_pontos);
    let obj_score_data = {
        quest : '',
        ops : ''
    };
    obj_score_data.quest = sorteArray[index - 1]; // Ok...
    obj_score_data.ops = score_pontos;
    // Teste de dados 'index' amazenado;
    console.log(obj_score_data);
    // Teste de dados amazenado;
    console.log(array_data);
    // Passa os valores para uma array, que amazena o index da questão, e opção escolhida;
    return array_data[index] = obj_score_data;
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

// Adiciona a descrição da questão:
function indexQuestion (index_question) {
    if (sorteArray[index] >= 0 && sorteArray[index] < dataQuiz.length) {
        document.getElementById('quiz').innerHTML = `<h2>${dataQuiz[index_question].question}</h2>`; // OK...
      };
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
    indexQuestion (sorteArray[index]); // OK...

    // Adiciona pelo Index da array importada as alternativas:
    if (dataQuiz[sorteArray[index]] && dataQuiz[sorteArray[index]].alternatives) {
        while (i < dataQuiz[sorteArray[index]].alternatives.length) {
            // Adiciona os buttons com class e id para processar a correção:
            alternativesOps.innerHTML += `<button class="alternatives" id="index_correct" data-index="${i}">${dataQuiz[sorteArray[index]].alternatives[i]}</button>`;
            i++; // Ok...
        };
    } else {
         // finalizar - Finaliza o quiz;
        finalizar ();
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
        // Descrição da 'função score()' a cima;
        // score (0);
    } else {
        // finalizar - Finaliza o quiz : funcionalidade futuras...
        finalizar();
    };
};
// Inicio - Acessa o id 'next', chamando a função usando 'onclick';
document.getElementById('next').onclick = next;

// -----------------------------------------------------------------


// -----------------------------------------------------------------
const dataInfo = [
    {posicao: 'Líder', nome : "Amadeu Fernandes da Silva Neto"},
    {posicao: 'Comunicador', nome: "Kozikla Sanara Criri Rodrigues"},
    {posicao: 'Gestor/a do conhecimento', nome: "Stéphanie Maria Câmdido dos Santos"},
    {posicao: 'Colaborador/a', nome: "Antonio Sérgio Viana dos Santos"},
    {posicao: 'Colaborador/a', nome: "Caio da Silva Sousa"},
    {posicao: 'Colaborador/a', nome: "Sabrina Alves Marques"}
];
const initQuiz = () => {
    let username = prompt("Como deseja ser chamado?");
    document.getElementById('user').innerHTML += username;
    let x = 0;
    while (x < dataInfo.length) {
        document.getElementById('iteg').innerHTML += `<p>${dataInfo[x].posicao}: <span>${dataInfo[x].nome}</span></p>`;
        x++;
    }
}; 
initQuiz ();