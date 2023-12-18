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

// Função para jogar
function jogar(linha, coluna) {
    let dado = Math.floor(Math.random() * 6) + 1;
    if (jogadorAtual === 1) {
        tabela1[linha][coluna] = dado;
        document.getElementById('tabela1').rows[linha].cells[coluna].textContent = dado;
        for (let i = 0; i < 3; i++) {
            if (tabela2[i][coluna] === dado) {
                delete tabela2[i][coluna];
                document.getElementById('tabela2').rows[i].cells[coluna].textContent = "";
                document.getElementById('pontuacao2').textContent = "Pontuação do Jogador 2: " + (calcularPontuacao(tabela2) - dado);
            }
        }
        document.getElementById('pontuacao1').textContent = "Pontuação do Jogador 1: " + calcularPontuacao(tabela1);
    } else {
        tabela2[linha][coluna] = dado;
        document.getElementById('tabela2').rows[linha].cells[coluna].textContent = dado;
        for (let i = 0; i < 3; i++) {
            if (tabela1[i][coluna] === dado) {
                delete tabela1[i][coluna];
                document.getElementById('tabela1').rows[i].cells[coluna].textContent = "";
                document.getElementById('pontuacao1').textContent = "Pontuação do Jogador 1: " + (calcularPontuacao(tabela1) - dado);
            }
        }
        document.getElementById('pontuacao2').textContent = "Pontuação do Jogador 2: " + calcularPontuacao(tabela2);
    }
    
    // Verifica se o jogo terminou
    if (todasCasasPreenchidas(tabela1) || todasCasasPreenchidas(tabela2)) {
        let pontuacao1 = calcularPontuacao(tabela1);
        let pontuacao2 = calcularPontuacao(tabela2);
        if (pontuacao1 > pontuacao2) {
            alert("O jogo terminou! O vencedor é o Jogador 1 com " + pontuacao1 + " pontos!");
        } else if (pontuacao2 > pontuacao1) {
            alert("O jogo terminou! O vencedor é o Jogador 2 com " + pontuacao2 + " pontos!");
        } else {
            alert("O jogo terminou! É um empate!");
        }
    } else {
        jogadorAtual = 3 - jogadorAtual;
    }
}

// Função para iniciar o jogo
function iniciarJogo() {
    if (jogadorAtual === 1) {
        let linha, coluna;
        do {
            linha = Math.floor(Math.random() * 3);
            coluna = Math.floor(Math.random() * 3);
        } while (tabela1[linha][coluna] !== undefined);
        jogar(linha, coluna);
    }
}

// Adiciona clique para cada célula da tabela do jogador 2
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        document.getElementById('tabela2').rows[i].cells[j].onclick = function() {
            if (jogadorAtual === 2 && this.textContent === "") {
                jogar(i, j);
            }
        };
    }
}

