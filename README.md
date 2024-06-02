# Documentação da API

Este documento fornece uma visão geral dos endpoints, payloads e respostas da API para o projeto.

## Tecnologias Utilizadas

- Node.js
- Express
- Zod

## Instalação

1. Clone o repositório:


2. Instale as dependências:

    ```bash
    cd seu-repositorio
    npm install
    ```

3. Inicie o servidor:

    ```bash
    npm start
    ```

## Endpoints

### `GET /livros`

Retorna uma lista de todos os livros disponiveis.

#### Requisição

Nenhum payload necessário.

#### Resposta

```json
[
    {
        "titulo": "Meditações",
        "autor": "Marco Aurélio",
        "genero": "Filosofia",
        "imagem": "https://m.media-amazon.com/images/I/41bQU67zLnL._SY445_SX342_.jpg",
        "quantidade": 5
    },
    {
        "titulo": "Orgulho e Preconceito",
        "autor": "Jane Austen",
        "genero": "Romance",
        "imagem": "https://m.media-amazon.com/images/I/51adYP1B4xL._SY445_SX342_.jpg",
        "quantidade": 2
    },
    {
        "titulo": "Nada Pode Me Ferir",
        "autor": "David Goggins",
        "genero": "Autoajuda",
        "imagem": "https://m.media-amazon.com/images/I/71wdbq8NbFL._SY385_.jpg",
        "quantidade": 3
    }
]
```

### `POST /livros`

Cadastra um novo livro

#### Requisição

```json
{
    "titulo": "teste",
    "autor": "teste",
    "genero": "teste",
    "imagem": "teste",
    "quantidade": 2,
}
```

#### Resposta

```json
{
    "titulo": "teste",
    "autor": "teste",
    "genero": "teste",
    "imagem": "teste",
    "quantidade": 2
}
```

### `PATCH /livros/comprar`

Compra um livro se estiver disponivel no estoque, caso esteja disponivel ele subtrai o número de exemplares disponiveís.

#### Requisição

```json
{
    "titulo": "teste",
}
```

#### Resposta

```json
{
    "message": "Você comprou o livro teste"
}
```



