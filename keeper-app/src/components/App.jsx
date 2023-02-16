import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function App() {
    return (
        <div>
            <Header />
            {notes.map(content => (<Note key={content.id} title={content.title} desc={content.content} />))}
            <Footer />
        </div>
    );
}

export default App;
