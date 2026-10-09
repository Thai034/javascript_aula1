// Exemplo 1: ler um texto e mostrar uma saudação
const campoNome = document.querySelector("#nome");
const botaoSaudacao = document.querySelector("#botao-saudacao");
const saidaSaudacao = document.querySelector("#saida-saudacao");

botaoSaudacao.addEventListener("click", function () {
    // trim remove espaços no início e no final do texto
    const nome = campoNome.value.trim();

    if (nome === "") {
        saidaSaudacao.textContent = "Por favor, digite seu nome.";
    } else {
        saidaSaudacao.textContent = `Olá, ${nome}! Bem-vindo à aula.`;
    }
});



// Exemplo 2: ler um número e usar estruturas de decisão
const campoNota = document.querySelector("#nota");
const botaoNota = document.querySelector("#botao-nota");
const saidaNota = document.querySelector("#saida-nota");

botaoNota.addEventListener("click", function () {
    const nota = Number(campoNota.value);

    if (campoNota.value === "" || nota < 0 || nota > 10) {
        saidaNota.textContent = "Digite uma nota válida entre 0 e 10.";
    } else if (nota >= 7) {
        saidaNota.textContent = "Situação: aprovado.";
    } else if (nota >= 5) {
        saidaNota.textContent = "Situação: recuperação.";
    } else {
        saidaNota.textContent = "Situação: reprovado.";
    }
});



// Exemplo 3: percorrer um array e criar elementos HTML
const conteudos = ["Variáveis", "Condições", "Repetições", "Funções", "Eventos"];
const botaoListar = document.querySelector("#botao-listar");
const listaConteudos = document.querySelector("#lista-conteudos");

botaoListar.addEventListener("click", function () {
    // Limpa a lista para não repetir os itens a cada clique
    listaConteudos.innerHTML = "";

    for (const conteudo of conteudos) {
        // Cria um novo elemento li na memória
        const item = document.createElement("li");
        item.textContent = conteudo;

        // Insere o novo li dentro da lista ul
        listaConteudos.appendChild(item);
    }
});

const Num1 = document.querySelector("#numero1");
const Num2 = document.querySelector("#numero2")
const botaoSoma = document.querySelector("#botao-soma");
const resultado = document.querySelector("#saida-soma");

botaoSoma.addEventListener("click", function () {
    // value lê o conteúdo do campo. Number converte o texto em número
    const numero1 = Number(Num1.value);
    const numero2 = Number(Num2.value);

    // Um campo vazio precisa ser verificado antes de fazer o cálculo
   

    const Soma = numero1 + numero2;
    resultado.textContent = `A soma de ${numero1} + ${numero2} é ${Soma}.`;
});

const Idade = document.querySelector("#idade");
const botaoIdade = document.querySelector("#botao-idade");
const MaiorIdade = document.querySelector("#saida-idade");

botaoIdade.addEventListener("click", function () {
    const idade = Number(Idade.value);

    if(Idade > 18){
        MaiorIdade.textContent = 'O usuário é maior de idade.'
    }
    else{
        MaiorIdade.textContent = 'O usuário é betinha ainda.'
    }
})
