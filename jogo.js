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