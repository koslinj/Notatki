const Note = require('../../db/models/note')

module.exports = {
    saveNote(req, res){

        const newNote = new Note({
            title: 'testowy tytuł 3',
            body: 'tresc notatki 3'
        });
        newNote.save().then(() => {
            console.log("zapisano notatke");
        });

        res.send('Strona główna działa!');
    }
}
