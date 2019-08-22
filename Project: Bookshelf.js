var books = [
    {
    title: "The Giver",
    author: "Lois Lowry",
    stars: 4
},
{
    title: "Twilight",
    author: "Stephanie Meyer",
    stars: 5
},
{ 
    title: "The Fault in Our Stars",
    author: "John Green",
    stars: 3
},
{ 
    title: "Autism - The Fight Inside",
    author: "A. Bower",
    stars: 4
},
{
    title: "Harry Potter",
    author: "J.K. Rowling",
    stars: 5
},
{
    title: "Lord of the Rings",
    author: "J.R.R. Tolkien",
    stars: 5
},
{
    title: "To Kill a Mockingbird",
    author:"Harper Lee",
    stars: 3
},
{
    title:"Number the Stars",
    author:"Lois Lowry",
    stars: 2
}
    ];
 background(9, 41, 110);
//refX and refY refer to the position of the X and Y coordinates respectively in the upper left corner of the Book which is used as a book reference. All coordinates for creating book are built from this reference point.
var stars = getImage("cute/Star");
//Loop for creating Book
var drawBook = function(refX,refY, bookIndex) {
    //get the book from the book list
    var book = books[bookIndex];
    //cover color
    fill(random(0,255), random(0,255), random(0,255));
    //book
    rect (refX, refY + 10, 95, 101);
    //text color
    fill(5, 5, 5);
    //book title
    text(book.title, refX + 5, refY + 15, 95, 30);
    //book author
    text(book.author, refX + 5, refY + 50, 95, 30);
    //number of stars for book
    for (var s = 0; s < book.stars; s++){
        image(stars, (refX +5) + (s*15), refY + 90, 15, 15);
    }

};
//Main Loop: creates books and puts on shelves

for (var i = 0; i < books.length; i++) {
    //refX is reset every 4 books and each book is 110 pixels apart (95 for book and 10 space)
    var refX = (i%4)*105;
    //refY changes with each shelf and each shelf is 130 pixels apart (100 for book, 20 for shelf and 10 space)
    var refY = floor(i/4)*120;
    if (i%4 === 0) {
        //need to draw new shelf to hold new row of books
        fill(173, 117, 33);
        rect(0, refY + 110, width, 10);
    }
    drawBook(refX, refY, i);
}
