# Digital Store

Projeto Front-end de uma loja virtual desenvolvido durante o curso
Geração Tech — Desenvolvimento Web Full Stack.

A aplicação utiliza React, Vite e React Router, seguindo como
referência visual o projeto Drip Store da Digital College.

## Tecnologias utilizadas

- React
- JavaScript
- Vite
- React Router
- CSS
- Context API

## Funcionalidades

- Página inicial com apresentação dos produtos
- Catálogo de produtos
- Pesquisa por nome, marca e categoria
- Filtros por marca e categoria
- Ordenação por menor e maior preço
- Página de detalhes dos produtos
- Seleção de tamanho e cor
- Carrinho de compras
- Alteração de quantidade e remoção de produtos
- Checkout demonstrativo
- Confirmação de pedido
- Visualização do último pedido
- Página de login demonstrativa
- Página de cadastro demonstrativa
- Página de categorias com navegação para produtos filtrados
- Layout responsivo

## Limitações

Este projeto é uma demonstração Front-end.

- Login e cadastro não criam sessões ou contas reais.
- O checkout não realiza pagamentos.
- Os pedidos são mantidos apenas em memória durante a sessão.
- Ao atualizar a página, os dados do carrinho e do último pedido
  podem ser perdidos.
- Não há integração com o Back-end nesta versão.

## Como executar

Requisitos:
- Node.js
- npm

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

Abra no navegador o endereço informado pelo Vite.

## Gerar versão de produção

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `dist`.

## Organização do projeto

```text
digital-store/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   │   └── CartContext.jsx
│   ├── data/
│   │   └── products.js
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ProductListingPage.jsx
│   │   ├── ProductViewPage.jsx
│   │   ├── CartPage.jsx
│   │   ├── CheckoutPage.jsx
│   │   ├── OrderConfirmationPage.jsx
│   │   ├── OrdersPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   └── CategoriesPage.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

## Referências

O projeto foi desenvolvido com base no modelo visual
Drip Store, disponibilizado pela Digital College.

- Repositório de referência:
  https://github.com/digitalcollegebr/projeto-digital-store

- Protótipo no Figma:
  https://www.figma.com/design/nUk0ihM3x4u8JQtxUoAEJf/DRIP-STORE---DIGITAL-COLLEGE--Copy-?node-id=22-30&p=f

A interface foi adaptada para fins educacionais.
Os produtos e as imagens são utilizados de maneira demonstrativa.

## Objetivo acadêmico

Aplicar os conhecimentos adquiridos no curso Geração Tech
no desenvolvimento de uma aplicação Front-end utilizando
React, componentização, gerenciamento de estado,
rotas, estilização e organização de código.

## Autor

João Pedro Félix de Oliveira

Projeto desenvolvido para o curso
Geração Tech — Desenvolvimento Web Full Stack.

## Repositório

https://github.com/1509jp/digital-store
