const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");


const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));



//use 127.0.0.1 instead of localhost in the string below to avoid ECONNREFUSED error
mongoose.connect("mongodb://127.0.0.1:27017/notesDB", {useNewUrlParser: true});

const noteSchema = {
    title: String,
    content: String
};

const Note = mongoose.model("Article", noteSchema);

app.route("/notes")
    .get((req, res) => {
        Note.find((err, foundNotes) => {
            res.send((!err) ? foundNotes : err);
        });
    })
    .post((req, res) => {
        console.log(req.body.title);
        console.log(req.body.content);

        const newNote = new Note({
            title: req.body.title,
            content: req.body.content
        });
        newNote.save((err) => res.send(
            (!err) ? "New note added successfully" : err
        ));
        //newNote.save().then(() => res.send("New note has been added successfully"), (err) => res.send(err));
    })
    .delete("/notes", (req, res) => {
        Note.deleteMany((err) => res.send(
            (!err) ? "All notes deleted successfully" : err
        ));
    });

app.listen(3000, () => {
    console.log("Server started on port 3000");
});