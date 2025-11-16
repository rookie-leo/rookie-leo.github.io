// Renderiza lista de posts na home
if (document.getElementById("post-list")) {
    const list = document.getElementById("post-list");

    posts.forEach(p => {
        list.innerHTML += `
            <div class="post-card">
                <h2><a href="post.html?id=${p.id}">${p.title}</a></h2>
                <small>${p.date}</small>
                <p>${p.summary}</p>
            </div>
        `;
    });
}

// Renderiza conteúdo do post individual
if (document.getElementById("post-content")) {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");

    const post = posts.find(p => p.id === postId);

    fetch(post.file)
        .then(res => res.text())
        .then(md => {
            document.getElementById("post-content").innerHTML = marked.parse(md);
        });
}
