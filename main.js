// // Importa as question, alternatives, e opção (alternatives) correta: index_correct_question;
// import dataQuiz from "./assets/data.js";

// // Variaveis de controle global, responsaveis por controlar as alternativas e quetões, além de controlar erros de index não existente na array importada;
// let index = 0; // contador principal das question, alternatives;
// let i = 0; // Contador principal global (while);
// let array_data = []; // Amazena os dados por indixes (question, alternatives);
// let sorteArray = []; // Amazena indixes por números;

// // -----------------------------------------------------------------

// // Função para verificar e exibir a mensagem do nível alcançado;
// function exibirMensagemNivel() {
//     let totalQuestion = dataQuiz.length;
//     let perguntasRespondidas = array_data.length;
//     perguntasRespondidas += 5;
//     let scoreNivel = document.getElementById('scoreNivel');
//     let container_team = document.getElementById('container_team');

//     let progressoAtual = (perguntasRespondidas / totalQuestion) * 100;
//     if (progressoAtual >= 20 && progressoAtual < 40) {
//         scoreNivel.innerHTML = `<span>Nível Atual: ${2}</span>`;
//         container_team.style.borderColor = "green"
//       } else if (progressoAtual >= 40 && progressoAtual < 60) {
//         scoreNivel.innerHTML = `<span>Nível Atual: ${3}</span>`;
//         container_team.style.borderColor = "gold"
//       } else if (progressoAtual >= 60 && progressoAtual < 80) {
//         scoreNivel.innerHTML = `<span>Nível Atual: ${4}</span>`; 
//         container_team.style.borderColor = "orange"
//       } else if (progressoAtual >= 80) {
//         scoreNivel.innerHTML = `<span>Nível Atual: ${5}</span>`;
//         container_team.style.borderColor = "red"
//       };
// };

// // -----------------------------------------------------------------
// // Função sorte_question - Sorteia números baseado no tamanho do dataQuiz;
// const sorte_question = () => {
//     while (sorteArray.length < dataQuiz.length) {
//         let num = Math.floor(Math.random () * dataQuiz.length) + 1;
//         if (!sorteArray.includes (num)) {
//             sorteArray.push(num);
//         };
//     };
//     return sorteArray;
// }; let index_1 = sorte_question();
// // Abaixo testes;
// console.log(sorte_question()); // Test de sorte!
// console.log(dataQuiz[sorteArray[index]].question);

// // -----------------------------------------------------------------
// // Função end_quiz_fim - Faz a analise dos dados que foram coletados na 'array_data', e demostra as alternativas que o usuario marcou correta ou certa assim escolha;
// const end_quiz_fim = () => {
//     let play_quest = document.getElementById('quiz');
//     play_quest.innerHTML = '';
//     let i = 0;
    
//     while (i < array_data.length) {
//         if (array_data[i] && array_data[i].ops) {
//             play_quest.innerHTML += `<h3>${dataQuiz[array_data[i].quest].question}</h3>`;
//             if (array_data[i].ops == dataQuiz[i - 1].index_correct_question) {
//                 play_quest.innerHTML += `<p><span>Correta:</span> ${dataQuiz[array_data[i].quest].alternatives[array_data[i].ops]}</p>`;
//             } else {
//                 play_quest.innerHTML += `<p><span>Errada:</span> ${dataQuiz[array_data[i].quest].alternatives[array_data[i].ops]}</p>`;
//             }
//         } else {
//             console.log("???");
//         }
//         i++;
//     }
// };

// // Função finalizar - Troca o valor do 'onclick' por outro, afim de mostrar ao jogador as alternativas corretas;
// function finalizar () {
//     let end_quiz = document.getElementById('outro');
//     end_quiz.innerHTML = "FINALIZAR!";
//     end_quiz.onclick = end_quiz_fim;
//     // Zera o contador para finalizar...
// };

// // -----------------------------------------------------------------
// // Trata-se de pontuação, correção das questões:
// // O parametro 'score_pontos' responsavel por bloquear e anular quetão sem alternativa escolhida, além de repassar o valor da questão atual;
// function score (score_pontos) {
//     // Teste de validação abaixo;
//     // console.log("Pontos: ", score_pontos);
//     let obj_score_data = {
//         quest : '',
//         ops : ''
//     };
//     obj_score_data.quest = sorteArray[index - 1]; // Ok...
//     obj_score_data.ops = score_pontos;
//     // Teste de dados 'index' amazenado;
//     console.log(obj_score_data);
//     // Teste de dados amazenado;
//     console.log(array_data);
//     // Passa os valores para uma array, que amazena o index da questão, e opção escolhida;
//     return array_data[index] = obj_score_data;
// };

// // Função correct_question - Adiciona um atributo nas alternativas, sendo que o atributo é um index dos buttons existentes, quando clicados eles retornam um index para o Js.
// function correct_question () {
//     let index_correct = document.querySelectorAll('.alternatives');
//     // O onclick vai ligar o botão clicado que é o atual, passando o valor para a função que valida a escolha:
//     index_correct.forEach(function (index_correct_question_atual) {
//         index_correct_question_atual.onclick = () => {
//             // Função score - Pega o valor da alternativa clicada:
//             score (parseInt(index_correct_question_atual.getAttribute('data-index')));
//         };
//     });
// };

// // ------------------------------------------------------------

// // Adiciona a descrição da questão:
// function indexQuestion (index_question) {
//     if (sorteArray[index] >= 0 && sorteArray[index] < dataQuiz.length) {
//         document.getElementById('quiz').innerHTML = `<h2>${dataQuiz[index_question].question}</h2>`; // OK...
//       };
// };
// // Deixa a div com id quiz sem tags (Elementos):
// function removeAlternatives (alternativesOps) {
//     alternativesOps.innerHTML = '';
// };

// // Função ops - Adiciona as alternatives no HTML:
// function ops (index) {
//     let alternativesOps = document.getElementById('quiz');
//     // Teste de acesso as 'alternativesOps':
//     // alternativesOps.innerHTML = dataQuiz[index].alternatives.length;

//     //Função removeAlternatives - Deixa a div com id 'quiz' sem tags incialmente (Elementos) quando chamada:
//     removeAlternatives (alternativesOps);
//     // Função indexQuestion - Chama e adiciona a descrição da alternativa;
//     indexQuestion (sorteArray[index]); // OK...

//     // Adiciona pelo Index da array importada as alternativas:
//     if (dataQuiz[sorteArray[index]] && dataQuiz[sorteArray[index]].alternatives) {
//         while (i < dataQuiz[sorteArray[index]].alternatives.length) {
//             // Adiciona os buttons com class e id para processar a correção:
//             alternativesOps.innerHTML += `<button class="alternatives" id="index_correct" data-index="${i}">${dataQuiz[sorteArray[index]].alternatives[i]}</button>`;
//             i++; // Ok...
//         };
//     } else {
//          // finalizar - Finaliza o quiz;
//         finalizar ();
//     };
//     // Função correct_question - Valida as alternativas:
//     correct_question ();
// };

// // Função next - Pula para proxima pergunta:
// function next () {
//     i = 0;
//     exibirMensagemNivel();
//     // Verifica se as 'question' acabaram na array importada linha:01:
//     if (index <= (dataQuiz.length - 1)) {
//         ops(index);
//         index++;
//         // Descrição da 'função score()' a cima;
//         // score (0);
//     } else {
//         // finalizar - Finaliza o quiz : funcionalidade futuras...
//         finalizar();
//     };
// };
// // Inicio - Acessa o id 'next', chamando a função usando 'onclick';
// document.getElementById('next').onclick = next;

// // -----------------------------------------------------------------


// // -----------------------------------------------------------------
// const dataInfo = [
//     {posicao: 'Líder', nome : "Amadeu Fernandes da Silva Neto"},
//     {posicao: 'Comunicador', nome: "Kozikla Sanara Criri Rodrigues"},
//     {posicao: 'Gestor/a do conhecimento', nome: "Stéphanie Maria Câmdido dos Santos"},
//     {posicao: 'Colaborador/a', nome: "Antonio Sérgio Viana dos Santos"},
//     {posicao: 'Colaborador/a', nome: "Caio da Silva Sousa"},
//     {posicao: 'Colaborador/a', nome: "Sabrina Alves Marques"}
// ];
// const initQuiz = () => {
//     let username = prompt("Como deseja ser chamado?");
//     document.getElementById('user').innerHTML += username;
//     let x = 0;
//     while (x < dataInfo.length) {
//         document.getElementById('iteg').innerHTML += `<p>${dataInfo[x].posicao}: <span>${dataInfo[x].nome}</span></p>`;
//         x++;
//     }
// }; 
// initQuiz ();

// -----------------------------------------------------------------
import dataQuiz from "./assets/data.js";

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

let nivelAtual = 1; // Inicializa o nível atual
let perguntasRespondidas = 0; // Inicializa o contador de perguntas respondidas
let indexPerguntaAtual = 0; // Inicializa o índice da pergunta atual
let respostasCorretas = 0; // Inicializa o contador de respostas corretas

function exibirMensagemNivel() {
    let totalPerguntas = dataQuiz.length;
    let scoreNivel = document.getElementById('scoreNivel');
    let container_team = document.getElementById('container_team');

    let progressoAtual = (perguntasRespondidas / totalPerguntas) * 100;

    if (progressoAtual < 20) {
        scoreNivel.innerHTML = `<span>Nível Atual: 1</span>`;
        container_team.style.borderColor = "green";
    } else if (progressoAtual >= 20 && progressoAtual < 40) {
        scoreNivel.innerHTML = `<span>Nível Atual: 2</span>`;
        container_team.style.borderColor = "green";
    } else if (progressoAtual >= 40 && progressoAtual < 60) {
        scoreNivel.innerHTML = `<span>Nível Atual: 3</span>`;
        container_team.style.borderColor = "gold";
    } else if (progressoAtual >= 60 && progressoAtual < 80) {
        scoreNivel.innerHTML = `<span>Nível Atual: 4</span>`;
        container_team.style.borderColor = "orange";
    } else if (progressoAtual >= 80) {
        scoreNivel.innerHTML = `<span>Nível Atual: 5</span>`;
        container_team.style.borderColor = "red";
    }
};

function exibirPergunta() {
    let containerQuiz = document.getElementById('quiz');
    let perguntaAtual = dataQuiz[indexPerguntaAtual];

    containerQuiz.innerHTML = `<h2>${perguntaAtual.question}</h2>`;

    for (let i = 0; i < perguntaAtual.alternatives.length; i++) {
        containerQuiz.innerHTML += `<button class="alternatives" data-index="${i}">${perguntaAtual.alternatives[i]}</button>`;
    }

    // Adiciona evento de clique nas alternativas
    document.querySelectorAll('.alternatives').forEach(function (alternativa) {
        alternativa.onclick = function () {
            verificarResposta(parseInt(alternativa.getAttribute('data-index')));
        };
    });
};

function verificarResposta(respostaUsuario) {
    let perguntaAtual = dataQuiz[indexPerguntaAtual];

    if (respostaUsuario === perguntaAtual.index_correct_question) {
        respostasCorretas++;
        perguntasRespondidas++;

        if (respostasCorretas % 2 === 0) {
            nivelAtual++;
            console.log(`Parabéns! Você avançou para o Nível ${nivelAtual}`);
            exibirMensagemNivel();
        }

        if (indexPerguntaAtual < dataQuiz.length - 1) {
            indexPerguntaAtual++;
            exibirPergunta();
        } else {
            alert('Parabéns, você concluiu todas as perguntas!');
            // Aqui você pode decidir o que fazer ao finalizar todas as perguntas
        }
    } else {
        alert('Resposta incorreta. Recomece o quiz.');
        nivelAtual = 1;
        perguntasRespondidas = 0;
        indexPerguntaAtual = 0;
        respostasCorretas = 0;
        exibirMensagemNivel();
        exibirPergunta();
    }
};

// Adiciona evento de clique para o botão de início
document.getElementById('start').onclick = function () {
    // Inicia o quiz quando o botão de início for clicado
    exibirMensagemNivel();
    exibirPergunta();
    document.getElementById('start').style.display = 'none'; // Oculta o botão de início
};

document.getElementById('next').onclick = function () {
    // Inicia o quiz quando o botão de início for clicado
    exibirMensagemNivel();
    exibirPergunta();
    document.getElementById('next'); // Oculta o botão de início
};