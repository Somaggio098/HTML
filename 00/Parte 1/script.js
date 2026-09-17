class Produto {

    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        return this.preco - (this.preco * this.desconto / 100);
    }

    exibir() {
        let precoComDesconto = this.aplicarDesconto();

        return `
            <p><strong>Nome:</strong> ${this.nome}</p>
            <p><strong>Categoria:</strong> ${this.categoria}</p>
            <p><strong>Desconto:</strong> ${this.desconto}%</p>
            <p><strong>Preço com desconto:</strong> R$ ${precoComDesconto.toFixed(2)}</p>
        `;
    }
}

document.getElementById("formProduto").addEventListener("submit", function(event) {

    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let preco = parseFloat(document.getElementById("preco").value);
    let categoria = document.getElementById("categoria").value;
    let desconto = parseFloat(document.getElementById("desconto").value);

    let produto = new Produto(nome, preco, categoria, desconto);

    document.getElementById("resultado").innerHTML = produto.exibir();

});