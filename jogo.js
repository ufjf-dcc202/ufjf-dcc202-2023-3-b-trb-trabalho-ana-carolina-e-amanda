// Inicializando as variáveis
let jogadorAtual = 1;
let tabela1 = [], tabela2 = [];

for (let i = 0; i < 3; i++) {
    tabela1[i] = [];
    tabela2[i] = [];
    for (let j = 0; j < 3; j++) {
        tabela1[i][j] = undefined;
        tabela2[i][j] = undefined;
    }
}
let vezTabela1 = true;
let dado = null;

// Função para rolar o dado
function rolarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

// Função para calcular a pontuação
function calcularPontuacao(tabela) {
    let pontuacao = 0;
    for (let j = 0; j < 3; j++) {
        let contagem = [0, 0, 0, 0, 0, 0, 0];
        for (let i = 0; i < 3; i++) {
            if (tabela[i][j] !== undefined) {
                contagem[tabela[i][j]]++;
            }
        }
        for (let k = 1; k <= 6; k++) {
            if (contagem[k] > 0) {
                pontuacao += k * contagem[k];
            }
        }
    }
    return pontuacao;
}