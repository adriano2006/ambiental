const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:" Qual é um dos principais fontes de poluição do ar ? ",
        alternativas: [
            "Fabricas.",
            "Oceanos."
        ]
    },
    {
        enunciado: "Qual é uma cosequencias comum da poluição do ar?",
        alternativas: [
            "redução das chuvas ácidas.",
            "Diminuição de disponibilidade de água potavel."
        ]
    },
    {
        enunciado:  "O que contribui para a poluição do ar",
        alternativas: [
            "Reciclagem adequada de residuos.",
            "Desflorestação."
        ]
    }

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

