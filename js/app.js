function comprar() {
    // Recuperar valores: Tipo do ingresso, quantidade de compra, quantidade disponível
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeCompra = parseInt(document.getElementById('qtd').value);

    // Verificar se a quantidade é válida
    if (quantidadeCompra <= 0) {
        alert('Digite uma quantidade válida!');
        return;
    }

    // Saber quantos ingressos ainda estão disponíveis
    let elementoQtd;
    if (tipoIngresso === 'pista') {
        elementoQtd = document.getElementById('qtd-pista');
    } else if (tipoIngresso === 'superior') {
        elementoQtd = document.getElementById('qtd-superior');
    } else if (tipoIngresso === 'inferior') {
        elementoQtd = document.getElementById('qtd-inferior');
    }

    let qtdDisponivel = parseInt(elementoQtd.textContent);

    // Verificar se pode comprar
    if (quantidadeCompra > qtdDisponivel) {
        alert (`Os ingressos da ${tipoIngresso} esgotaram!`)
        return;
    }

    // Subtrair e atualizar ingressos disponíveis
    elementoQtd.textContent = qtdDisponivel - quantidadeCompra;
    alert ('Compra realizada com sucesso!');
}