const { z } = require('zod');

const validateLivro = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body)
        next();
    } catch (error) {
        return res.status(400).json({ error: error.errors });
    }
};  

module.exports = { validateLivro };