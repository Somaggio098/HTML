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
            <div>
                <p><strong>Nome:</strong> ${this.nome}</p>
                <p><strong>Preço original:</strong> R$ ${this.preco.toFixed(2)}</p>
                <p><strong>Categoria:</strong> ${this.categoria}</p>
                <p><strong>Desconto:</strong> ${this.desconto}%</p>
                <p><strong>Preço com desconto:</strong> R$ ${precoComDesconto.toFixed(2)}</p>
                <hr>
            </div>
        `;
    }
}


// Array para armazenar vários produtos
let produtos = [];


// Cadastro do produto
document.getElementById("formProduto").addEventListener("submit", function(event) {

    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let preco = parseFloat(document.getElementById("preco").value);
    let categoria = document.getElementById("categoria").value;
    let desconto = parseFloat(document.getElementById("desconto").value);

    // Cria um novo produto
    let produto = new Produto(nome, preco, categoria, desconto);

    // Adiciona o produto ao array
    produtos.push(produto);

    // Limpa a área dos produtos
    document.getElementById("resultado").innerHTML = "";

    // Exibe todos os produtos cadastrados
    produtos.forEach(function(produto) {
        document.getElementById("resultado").innerHTML += produto.exibir();
    });

    // Limpa o formulário
    document.getElementById("formProduto").reset();

});