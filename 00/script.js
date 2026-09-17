const nome = document.querySelector("#nome");
const botaoCadastrar = document.querySelector("botaoCadastrar")
const resultado = document.querySelector("#resultado");

botaoCadastrar.addEventListener("click", function() {
    
    resultado.textContent = nome.ariaValueMax;
}); 