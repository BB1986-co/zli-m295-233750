const express = require('express');

// server components
const app = express();
const port = 3000;

// Hier lade ich die Express JSON Middleware, damit ich an meine Endpunkte JSON-Daten im Body senden kann und diese direkt als JavaScript Objekt verfügbar werden.
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

let lends = []

// Caution: this is only an example. NEVER store credentials in code!
const secretAdminCredentials = { email: "desk@library.example", password: "m295" }


app.post('/login', function (request, response) {
	const { email, password } = request.body

	// Check the credentials against store
	if (email?.toLowerCase() == secretAdminCredentials.email && password == secretAdminCredentials.password) {

		// Link email to session
		request.session.email = email

		return response.status(200).json({ email: request.session.email })
	}

  return response.status(401).json({ error: "Invalid credentials" })
});

app.get('/verify', function (request, response) {
	
	// Check if email is set in session
	if (request.session.email) {
		return response.status(200).json({ email: request.session.email })
	}

  return response.status(401).json({ error: "Not logged in" })
})

app.delete('/logout', function (request, response) {

	// Check if email is set in session
	if (request.session.email) {

		// Reset link of session to email
		request.session.email = null

		return response.status(204).send()
	}

  return response.status(401).json({ error: "Not logged in" })
})

app.get('/books', (request, response) => {
  response.send(books);
});

app.get('/books/:isbn', (request, response) => {
  response.send(books.find((book) => book.isbn === request.params.isbn ))
});

app.post('/books', (request, response) => {
  // immutable manipulation
  books = [...books, request.body];
  // mutable manipulation
  books.push(request.body);
  response.status(201).send(books);
});

app.put('/books/:isbn', (request, response) => {
  books = books.map((book) => book.isbn === request.params.isbn ? request.body : book);
  /*
  books = books.map((book) => {
    if(book.isbn === request.params.isbn) {
      return request.body;
    } else {
      return book;
    }
  });
  */
  response.send(books);
});

app.patch('/books/:isbn', (request, response) => {
  const keys = Object.keys(request.body);
  const oldBook = books.find((book) => book.isbn === request.params.isbn );
  keys.forEach((key) => oldBook[key] = request.body[key]);
  books = books.map((book) => book.isbn === request.params.isbn ? oldBook : book);
  response.send(books);
});

app.delete('/books/:isbn', (request, response) => {
  books = books.filter((book) => book.isbn !== request.params.isbn);
  response.send(books);
});

// lends

app.get('/lends', (request, response) => {
  response.send(lends);
});

app.get('/lends/:id', (request, response) => {
  response.send(lends.find((lend) => lend.id === request.params.id))
});

app.post('/lends', (request, response) => {
  const newLend = request.body;
  newLend['borrowed_at'] = new Date().toISOString();
  lends = [...lends, request.body];
  response.status(201).send(lends);
});

app.delete('/lends/:id', (request, response) => {
  const returnedLend = lends.find((lend) => lend.id === request.params.id)
  returnedLend['returned_at'] = new Date().toISOString();
  response.send(lends);
});



app.listen(port, () => {
  console.log(`Bookstore app listening on port ${port}`);
});
