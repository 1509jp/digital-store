
# Digital Store 🛍️

Projeto Front-end de uma loja virtual desenvolvido como atividade final do curso **Geração Tech**, com base no projeto de referência da Digital College.

A aplicação foi construída utilizando React e Vite, com foco na criação de componentes reutilizáveis, navegação entre páginas, organização do código e responsividade.

## 🚀 Tecnologias utilizadas

- React
- JavaScript
- Vite
- React Router DOM
- CSS3
- HTML5
- Git e GitHub

## 🛒 Funcionalidades

- Página inicial com banner interativo e coleções em destaque.
- Listagem de produtos com imagens, preços e descontos.
- Pesquisa de produtos por nome, marca ou categoria.
- Filtros de produtos por marca e categoria.
- Ordenação por menor e maior preço.
- Página de detalhes de cada produto.
- Galeria de imagens com visualizações alternativas.
- Seleção de tamanho e cor dos produtos.
- Exibição de produtos relacionados.
- Layout responsivo para computadores e dispositivos móveis.

**Observação:** o botão de compra é demonstrativo. O projeto não possui processamento de pagamentos, autenticação ou integração com um Back-end.

## 📄 Páginas do projeto

| Página | Rota |
|---|---|
| Página inicial | `/` |
| Listagem de produtos | `/products` |
| Detalhes do produto | `/products/:id` |

## 💻 Como executar o projeto

### Pré-requisitos

- Node.js
- npm

### Instalação

Clone o repositório:

```bash
git clone https://github.com/1509jp/digital-store.git
```

Entre na pasta:

```bash
cd digital-store
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no navegador o endereço informado pelo Vite no terminal.

### Gerar versão de produção

```bash
npm run build
```

## 📁 Organização do projeto

```text
digital-store/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   │   └── products.js
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ProductListingPage.jsx
│   │   └── ProductViewPage.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

## 🎨 Referências

O projeto foi desenvolvido com base no modelo visual **Drip Store**, disponibilizado pela Digital College.

- [Repositório de referência](https://github.com/digitalcollegebr/projeto-digital-store)
- [Protótipo no Figma](https://www.figma.com/design/nUk0ihM3x4u8JQtxUoAEJf/DRIP-STORE---DIGITAL-COLLEGE--Copy-?node-id=22-30&p=f)

A interface foi adaptada para fins educacionais. Os produtos e as imagens são utilizados de maneira demonstrativa e podem não corresponder aos modelos comerciais apresentados.

## 📚 Objetivo acadêmico

Aplicar os conhecimentos adquiridos durante o curso Geração Tech no desenvolvimento de uma aplicação Front-end utilizando React, incluindo componentização, gerenciamento de estado, rotas, estilização e boas práticas de organização.

## 👨‍💻 Autor

João Pedro Félix de Oliveira

Projeto desenvolvido para o curso **Geração Tech — Full Stack**.

## 🔗 Repositório

https://github.com/1509jp/digital-store
