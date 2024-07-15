document.addEventListener('DOMContentLoaded', () => {

    const myLibrary = [];

    function Book(title, author, pages, hasRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead;
    }

    // Add an infor method to the Book prototype
    Book.prototype.info = function () {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.hasRead ? 'read' : 'not read yet'}`;
    }

    function addBookToLibrary(title, author, pages, hasRead) {
        const newBook = new Book(title, author, pages, hasRead);
        myLibrary.push(newBook);

    }


    function displayBooks() {

        const bookshelf = document.getElementById('bookshelf');
        bookshelf.innerHTML = "";

        myLibrary.forEach(book => {
            // console.log(book.info())
            // Create a Card element
            const card = document.createElement('div');
            card.classList.add('card');

            // Create title element
            const title = document.createElement('h2');
            title.textContent = book.title;
            card.appendChild(title);

            // Create author element
            const author = document.createElement('p');
            author.textContent = `Author: ${book.author}`;
            card.appendChild(title);

            // Create pages element
            const pages = document.createElement('p');
            pages.textContent = `Pages: ${book.pages}`;
            card.appendChild(pages);

            // Create read status element
            const hasRead = document.createElement('p');
            hasRead.textContent = book.hasRead ? 'Status: Read' : "Status: Not read";
            card.appendChild(hasRead);

            // Append the card to bookshelf
            bookshelf.appendChild(card);
        })
    }

    // Add books to library
    addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
    addBookToLibrary('1984', 'George Orwell', 328, true);
    addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, false)

    displayBooks();

    // Modal and form handling
    const modal = document.getElementById('myModal');
    const btn = document.getElementById('addBook');
    const span = document.getElementsByClassName('close')[0];
    const form = document.getElementsByClassName(`bookform`);

    // When user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = `block`;
    }

    // When user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = 'none';
    }

    // When user clicks anywhere outside the modal. close it
    window.onclick = function(event) {
        if (event.target == modal){
            modal.style.display = 'none';
        }
    }

})  