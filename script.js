let tamanhoFonteAtual = 112.5;

function alterarTamanhoFonte(acao) {
    if (acao === 'aumentar' && tamanhoFonteAtual < 150) {
        tamanhoFonteAtual += 10;
    } else if (acao === 'diminuir' && tamanhoFonteAtual > 90) {
        tamanhoFonteAtual -= 10;
    } else if (acao === 'normal') {
        tamanhoFonteAtual = 112.5;
    }
    document.documentElement.style.setProperty('--base-font-size', `${tamanhoFonteAtual}%`);
}

function alternarAltoContraste() {
    const body = document.body;
    const btn = document.getElementById('btn-contraste');

    body.classList.toggle('alto-contraste');
    
    const isAltoContraste = body.classList.contains('alto-contraste');
    btn.setAttribute('aria-pressed', isAltoContraste);
}
