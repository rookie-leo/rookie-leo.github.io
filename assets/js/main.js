// Renderiza lista de posts dinâmicos na home
if (document.getElementById("post-list")) {
    const list = document.getElementById("post-list");

    posts.forEach(p => {
        list.innerHTML += `
            <li>
                <a href="${p.file}">${p.title}</a>
            </li>
        `;
    });
}
