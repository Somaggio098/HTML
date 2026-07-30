const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    if (nome === "" || email === "") {
        alert("Preencha todos os campos.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um e-mail válido.");
        return;
    }

    alert("Obrigado, " + nome + "! Sua mensagem foi enviada com sucesso.");

    formulario.reset();

});