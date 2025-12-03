const express = require("express")
const app = express()
const port = 5000;

app.use(express.json());

// const books = [
//     {
//         id: 1,
//         title: "How to get Rich",
//         author: "Arthur",
//     },
//     {
//         id: 2,
//         title: "How to get Smart",
//         author: "Morgan"
//     },
//     {
//         id: 3,
//         title: "How to train your dragon",
//         author: "Skils"
//     }
// ]

app.post('/api/books', (req, res) => {
    const newBook = req.body; // 1. Get data from React

    // 2. Create a simple ID (in a real DB, the DB does this)
    newBook.id = Date.now();

    // 3. Add to our array
    books.push(newBook);

    // 4. Send back the new book + 201 status (Created)
    res.status(201).json(newBook);
})

app.delete('/api/books/:id', (req, res) => {
    // 1. Get the ID from the URL (e.g., /api/books/5)
    // URLs are strings, so we must convert to integer
    const id = parseInt(req.params.id);

    // 2. Find where this book is in our array
    const index = books.findIndex(book => book.id === id);

    if (index !== -1) {
        // 3. Remove 1 item at that index
        books.splice(index, 1);
        // 4. Send "No Content" success status
        res.status(204).send();
    } else {
        res.status(404).json({ error: "Book not found" });
    }
})

app.get('/api/books', (req, res) => {
    res.json(books)
})

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})