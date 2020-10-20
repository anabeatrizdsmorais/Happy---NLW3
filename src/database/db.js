//importando lib
const Database = require('sqlite-async');

function execute (db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `)
}

//cria banco de dados
// pede para que o bd sqlite-async abra o dirname (diretorio pasta local database) e coloca na pasta database um arquivo chamado database.sqlite.
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)
