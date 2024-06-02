const { z } = require('zod');


const livroSchema = z.object({
    titulo: z.string({ 
        required_error: 'O campo título é obrigatório',
        invalid_type_error: 'O campo título deve ser uma string'
    }),
    autor: z.string({ 
        required_error: 'O campo autor é obrigatório',
        invalid_type_error: 'O campo autor deve ser uma string'
    }),
    genero: z.string({
        required_error: 'O campo gênero é obrigatório',
        invalid_type_error: 'O campo gênero deve ser uma string'
    }),
    imagem: z.string({
        required_error: 'O campo imagem é obrigatório',
        invalid_type_error: 'O campo imagem deve ser uma string'
    }),
    quantidade: z.number({
        required_error: 'O campo quantidade é obrigatório',
        invalid_type_error: 'O campo quantidade deve ser um número',
    })
})

module.exports = livroSchema;