/*  
    Zu der bereits vorhanden REST API  muss eine neue Resource mit 'Lend' hinzugefügt werden. 
    Es müssen korrekte Status-Codes und Content-Types implementiert werden.
    Folgende Punkte müssen umgesetzt werden:
        - GET /lends Gibt alle Ausleihen als JSON zurück (erledigt)
        - GET /lends/{id} Gibt alle Informationen zu einer Ausleihe als JSON zurück
        - POST /lends Leiht ein neues Buch aus
        - PATCH /lends/{id} Ändert die Daten einer Ausleihe gibt dasselbe aktualisierte Objekt als JSON zurück
*/

const express = require('express');
const { get } = require('request');
const app = express();
const port = 3000;


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

  let lends = [ 
    {id: "1", customer_id: "00162435", isbn: "978-0553386790", borrowed_at: Date, returned_at: null },
    {id: "2", customer_id: "00162436", isbn: "978-1501132957", borrowed_at: Date, returned_at: null },
    {id: "3", customer_id: "00162437", isbn: "978-0307277671", borrowed_at: Date, returned_at: null },
    {id: "4", customer_id: "00162438", isbn: "978-0345804310", borrowed_at: Date, returned_at: null },
    {id: "5", customer_id: "00162439", isbn: "978-0316769488", borrowed_at: Date, returned_at: null }
  ];

app.get('/lends', (request, response) => {
    response.send(lends);
  });

app.get('/lends/:id', (request,response) => {
    response.send(lends.find((lend) => lend.id === request.params.id));
});















  
  app.listen(port, () => {
    console.log(`Bookstore app listening on port ${port}`);
  });
  
 