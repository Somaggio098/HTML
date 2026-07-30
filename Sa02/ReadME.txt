SITUAÇÃO DE APRENDIZAGEM 02

1. MELHORIAS REALIZADAS

 Organização do layout utilizando CSS Grid para exibição das notícias em colunas.
 Implementação de um cabeçalho com logotipo e menu de navegação.
 Criação de uma seção de destaque para apresentação do portal de notícias.
 Aplicação de efeitos visuais como sombras, bordas e animação ao passar o mouse sobre as notícias.
 Padronização das imagens utilizando tamanho fixo e a propriedade object-fit: cover.
 Definição de uma identidade visual com cores consistentes.
 Desenvolvimento de um layout responsivo para diferentes dispositivos.
 Estruturação das notícias em cartões para facilitar a leitura e organização do conteúdo.
 Utilização de Flexbox para organizar os elementos do cabeçalho e do menu.

---

2. ELEMENTOS SEMÂNTICOS UTILIZADOS

Foram utilizados os seguintes elementos semânticos do HTML5:

 <header>: representa o cabeçalho da página.
 <nav>: contém os links de navegação do site.
 <main>: área principal do conteúdo.
 <article>: representa cada notícia individual.
 <footer>: contém as informações de contato.
 <h1> e <h2>: títulos principais e secundários.
 <p>: parágrafos de texto.

---

3. MEDIA QUERIES IMPLEMENTADAS

TABLET (até 992px)

Objetivo:

 Reduzir a quantidade de colunas de notícias de 3 para 2.
 Melhorar a visualização do conteúdo em telas médias.

Código utilizado:

@media (max-width: 992px) {
.conteudo {
grid-template-columns: repeat(2, 1fr);
}
}

SMARTPHONE (até 768px)

Objetivo:

 Organizar o menu em formato vertical.
 Centralizar os elementos do cabeçalho.
 Exibir apenas uma coluna de notícias.
 Ajustar o tamanho dos títulos para melhor leitura.

Código utilizado:

@media (max-width: 768px) {
.topo {
flex-direction: column;
align-items: center;
text-align: center;
}

```
.menu {
    flex-direction: column;
}

.conteudo {
    grid-template-columns: 1fr;
}

.noticia h2 {
    font-size: 1.1rem;
}
```

}

---

4. DECISÕES DE UX E UI ADOTADAS

UX (Experiência do Usuário)

 Navegação simples através do menu superior.
 Organização das notícias por categorias.
 Layout responsivo para diferentes dispositivos.
 Estrutura visual limpa e fácil de compreender.
 Conteúdo distribuído de forma organizada para facilitar a leitura.

UI (Interface do Usuário)

 Utilização das cores azul escuro e dourado para transmitir profissionalismo.
 Cartões de notícias com sombras suaves para destaque visual.
 Efeito hover nas notícias para aumentar a interatividade.
 Espaçamento adequado entre os elementos da página.
 Imagens ilustrativas para tornar o conteúdo mais atrativo.
 Design moderno e organizado seguindo padrões atuais de sites de notícias.

---

CONCLUSÃO

O projeto foi desenvolvido utilizando HTML5 e CSS3, aplicando boas práticas de semântica, responsividade, organização visual e experiência do usuário. O resultado é um portal de notícias funcional, responsivo e de fácil navegação.
    