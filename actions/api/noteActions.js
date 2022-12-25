const Note = require('../../db/models/note')

class NoteActions {
    
    saveNote(req, res){
        // const newNote = new Note({
        //     title: 'testowy tytuł 3',
        //     body: 'tresc notatki 3'
        // });
        // newNote.save().then(() => {
        //     console.log("zapisano notatke");
        // });
        const title = req.body.title;
        const body = req.body.body;

        res.send('notatka zostala utworzona. TYTUL '+title+'TRESC '+body);
    }

    getAllNotes(req,res) {
        // pobieranie notatek
        res.send('API dzialaaa')
    }

    getNote(req,res) {
        // pobieranie notatki
        res.send('info o notce')
    }

    updateNote(req,res) {
        // aktualizowanie notatki
        res.send('notatka zaktualizowana')
    }

    deleteNote(req,res) {
        // usuwanie notatki
        res.send('notatka usunieta')
    }

}

module.exports = new NoteActions();
