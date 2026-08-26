// Variável para armazenar o tamanho da fonte atual
let tamanhoFonteAtual = 112.5;

/**
 * Função para alterar o tamanho da fonte da página
 * @param {string} acao - Pode ser 'aumentar', 'diminuir' ou 'normal'
 */
function alterarTamanhoFonte(acao) {
    if (acao === 'aumentar' && tamanhoFonteAtual < 150) {
        tamanhoFonteAtual += 10;
    } else if (acao === 'diminuir' && tamanhoFonteAtual > 90) {
        tamanhoFonteAtual -= 10;
    } else if (acao === 'normal') {
        tamanhoFonteAtual = 112.5;
    }
    // Aplica a mudança no CSS usando a variável root
    document.documentElement.style.setProperty('--base-font-size', `${tamanhoFonteAtual}%`);
}

/**
 * Função para ativar ou desativar o modo de alto contraste
 */
function alternarAltoContraste() {
    const body = document.body;
    const btn = document.getElementById('btn-contraste');
    
    // Alterna a classe que aciona as variáveis CSS de alto contraste
    body.classList.toggle('alto-contraste');
    
    // Atualiza o atributo aria-pressed para informar leitores de tela sobre o estado do botão
    const isAltoContraste = body.classList.contains('alto-contraste');
    btn.setAttribute('aria-pressed', isAltoContraste);
}
