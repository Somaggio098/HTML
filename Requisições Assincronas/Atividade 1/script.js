const botao = document.querySelector("#btnConsultar");
const resultado = document.querySelector("#resultado");
const status = document.querySelector("#status");

const urlOpenGL = "https://api.github.com/repos/KhronosGroup/OpenGL-Registry/contents/api ";

async function consultarOpenGL() {
    botao.disabled = true;
    status.textContent = "Consultando a API...";
    resultado.innerHTML = "";

    try {
        const resposta = await fetch(urlOpenGL, {
            headers: {
                Accept: "application/vnd.github+json"
            }
        });

        if (!resposta.ok) {
            throw new Error(`A API respondeu com o status ${resposta.status}.`);
        }

        const dados = await resposta.json();
        const itens = dados.slice(0, 12);

        resultado.innerHTML = `
            <section class="info">
                <h2>Dados recebidos</h2>
                <p><strong>Endpoint:</strong> ${urlOpenGL}</p>
                <p><strong>Itens encontrados:</strong> ${dados.length}</p>
                <h3>Itens do registro</h3>
                <ul>
                    ${itens.map((item) => `
                        <li>
                            <a href="${item.html_url}" target="_blank" rel="noopener noreferrer">
                                ${item.name}
                            </a>
                            <span>${item.type === "dir" ? "pasta" : `${item.size.toLocaleString("pt-BR")} bytes`}</span>
                        </li>
                    `).join("")}
                </ul>
            </section>
        `;

        status.textContent = "Consulta concluída com sucesso.";
    } catch (erro) {
        status.textContent = "Não foi possível concluir a consulta.";
        resultado.innerHTML = `
            <p class="erro">
                ${erro.message} Verifique sua conexão e tente novamente.
            </p>
        `;
        console.error(erro);
    } finally {
        botao.disabled = false;
    }
}

botao.addEventListener("click", consultarOpenGL);
