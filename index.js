const express = require('express');
const { readFile, writeFile } = require('./fileReader');
const { validateLivro } = require('./middlewares/validator.middleware');
const livroSchema = require('./schemas/livroSchema');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/livros', (req, res) => {
    readFile().then((data) => {
        res.status(200).json(data);
    })
})

app.post('/livros', validateLivro(livroSchema), (req, res)  => {
    const { titulo, autor, genero, imagem, quantidade } = req.body;

    readFile().then((data) => {
        const livro = {
            titulo,
            autor,
            genero,
            imagem,
            quantidade
        }

        const livros = [...data, livro];

        writeFile(livros).then(() => {
            res.status(201).json(livro);
        })
    })
})

app.patch('/livros/comprar', (req, res) => {
    const { titulo } = req.body;

    readFile().then((data) => {
        const livro = data.find(livro => livro.titulo === titulo);
        
        if (!livro) {
            return res.status(404).json({ message: `Livro ${titulo} não encontrado` });
        }

        if (livro.quantidade === 0) {
            return res.status(400).json({ message: `Livro ${titulo} fora de estoque` });
        }

        const livros = data.map(livro => {
            if (livro.titulo === titulo) {
                return {
                    ...livro,
                    quantidade: livro.quantidade - 1
                }
            }

            return livro;
        })

        writeFile(livros).then(() => {
            res.status(200).json({ message: `Você comprou o livro ${titulo}`, livro: { ...livro, quantidade: livro.quantidade - 1 } });
        })
    })
})

app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`);
});