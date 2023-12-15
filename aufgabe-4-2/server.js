const express = require('express');
const app = express();
const port = 3000;

// Hier lade ich die express Json Middleware, damit ich an meine Endpunkte, direkt Json senden kann.
app.use(express.json());

// generated with ChatGPT
let books = [
  { isbn: "978-0143124177", title: "The Goldfinch", year: "2013", author: "Donna Tartt" },
  { isbn: "978-0307277671", title: "The Road", year: "2006", author: "Cormac McCarthy" },
  { isbn: "978-0553386790", title: "The Book Thief", year: "2005", author: "Markus Zusak" },
  { isbn: "978-0812995343", title: "All the Light We Cannot See", year: "2014", author: "Anthony Doerr" },
  { isbn: "978-0375831003", title: "The Curious Incident of the Dog in the Night-Time", year: "2003", author: "Mark Haddon" },
  { isbn: "978-1501132957", title: "The Underground Railroad", year: "2016", author: "Colson Whitehead" },
  { isbn: "978-0679735779", title: "Beloved", year: "1987", author: "Toni Morrison" },
  { isbn: "978-0316769488", title: "The Catcher in the Rye", year: "1951", author: "J.D. Salinger" },
  { isbn: "978-0143039433", title: "Never Let Me Go", year: "2005", author: "Kazuo Ishiguro" },
  { isbn: "978-0345804310", title: "Gone Girl", year: "2012", author: "Gillian Flynn" }
];

// Endpoint zum Ausleihen eines Buchs
app.post('/lends/:isbn', (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookToLend = books.find((book) => book.id === bookId);

  if (!bookToLend) {
    return res.status(404).json({ message: 'Buch nicht gefunden' });
  }

  // Hier kannst du die Logik für das Ausleihen des Buchs implementieren.
  // Zum Beispiel: Markiere das Buch als ausgeliehen oder füge es zu einer Ausleihliste hinzu.

  return res.json({ message: 'Buch erfolgreich ausgeliehen' });
});

app.get('/books/{isbn}', (request, response) => {
  response.send(books);
});


app.get('/books/:isbn', (request, response) => {
  response.send(books.find((book) => book.isbn === request.params.isbn))
});

app.listen(port, () => {
  console.log(`Bookstore app listening on port ${port}`);
});

app.post('/books', (request,response) => {
    books.push(request.body);
    response.send(books);
});

app.put('/books/:isbn',(request,response) =>{
  books.map((books) = book.isbn === request.params.isbn ? request.body : book);
  response.send(books)
});

app.delete('/books/:isbn', (request,response) => {
  books = books.filter((book) => book.isbn !== request.params.isbn);
  response.send(books)
});

