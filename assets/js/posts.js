const posts = [
    {
        title: "Como criar um site estático com GitHub Pages",
        url: "/assets/posts/static-site-gh-pages.html",
        description: "Guia simples para publicar sites estáticos gratuitamente usando GitHub Pages.",
        year: "2025"
    },
    {
        title: "Ollama — Executando Modelos de Linguagem Localmente",
        url: "/assets/posts/ollama-executando-modelos-de-linguagem-localmente.html",
        description: "Aprenda como rodar modelos de linguagem localmente usando o Ollama, com privacidade total.",
        year: "2025"
    }
];

function loadPosts() {
    const container = document.getElementById("post-list");

    posts.forEach(post => {
        const card = document.createElement("div");
        card.className = "post-card";

        card.innerHTML = `
            <h3><a href="${post.url}">${post.title}</a></h3>
            <p>${post.description}</p>
            <p><small>${post.year}</small></p>
        `;

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", loadPosts);
