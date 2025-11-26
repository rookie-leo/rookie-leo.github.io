# 🌐 Blog Pessoal — Leonardo Paulino

Bem-vindo ao repositório do meu **blog pessoal**, um espaço onde compartilho meus estudos, experiências profissionais, projetos e reflexões sobre tecnologia.  
Este blog foi desenvolvido por mim com o objetivo de **praticar front-end, back-end (futuro) e processos de implantação**, além de registrar minha evolução como desenvolvedor.

---

## 🚀 Objetivo do Projeto

Ao invés de utilizar plataformas prontas como Medium, Hashnode ou WordPress, decidi construir meu próprio blog para:

- Praticar HTML, CSS e JavaScript puro  
- Melhorar minha organização e arquitetura de projetos estáticos  
- Experimentar conceitos de CI/CD no futuro  
- Evoluir o blog conforme aprendo novas tecnologias  
- Ter controle total sobre design, navegação e código  

Atualmente, o blog é **100% estático**, mas o plano é expandir com novos recursos.

---

## 🧰 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **Git & GitHub**
- **GitHub Pages** para hospedagem

---


## 📂 Estrutura do Projeto
```bash
/
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── posts.css
│   ├── js/
│   │   └── posts.js
│   └── img/
│
├── assets/posts/
│   ├── ollama-executando-modelos-de-linguagem-localmente.html
│   └── static-site-gh-pages.html
│
├── index.html
├── about.html
└── README.md
```

---

## 📝 Como Funciona a Listagem de Posts

A página inicial gera automaticamente a listagem de artigos a partir do arquivo:

/assets/js/posts.js

Cada post é registrado como um objeto JavaScript contendo:

- título  
- descrição curta  
- URL do post  
- ano  

Exemplo:

```js
{
  title: "Ollama — Executando Modelos de Linguagem Localmente",
  url: "/assets/posts/ollama-executando-modelos-de-linguagem-localmente.html",
  description: "Aprenda como rodar modelos de linguagem localmente usando o Ollama.",
  year: "2025"
}
```

🌍 Hospedagem
O blog está hospedado via GitHub Pages e pode ser acessado em:

👉 [https://rookie-leo.github.io/](https://rookie-leo.github.io/

🛠️ Como Executar Localmente
Clone o repositório:

git clone https://github.com/rookie-leo/rookie-leo.github.io.git

Entre na pasta:

```bash
cd <seu-repo>
```

Abra o index.html no navegador:

via duplo clique ou via servidor local:

🔮 Próximas Implementações
---
Adicionar sistema de likes

Sistema de comentários

Painel administrativo simples

Backend leve (provavelmente com AWS)

Pipeline de CI/CD

Melhorias de SEO

Dark/Light mode

Sidebar para anúncios

🤝 Contribuições
---
Este é um projeto pessoal, mas sugestões são bem-vindas!
Sinta-se à vontade para abrir issues ou enviar pull requests.

👨‍💻 Autor
---
Leonardo Paulino
Desenvolvedor Back-end | Java | AWS | Microsserviços
LinkedIn: https://www.linkedin.com/in/leonardo-silva-paulino-6b3412191/
