const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'livros.json');
 
const readFile = async () => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const json = JSON.parse(data);
        console.log(json);
        return json.livros;
    } catch (error) {
        console.log(error);
    }
}
 
const writeFile = async (livros) => {
    try {
        const data = JSON.stringify({ livros });
        fs.writeFileSync(filePath, data, 'utf8');
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = { readFile, writeFile };