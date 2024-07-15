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
        displayBooks();
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

    // Dialog modal and form handling
    const dialog = document.getElementById('bookDialog');
    const btn = document.getElementById('addBook');
    const form = document.getElementsByClassName(`bookform`);
    const cancelBtn = document.getElementById('cancelButton')
    const span = document.getElementsByClassName('close')[0];

    // When user clicks on the button, open the modal
    btn.onclick = function() {
        dialog.showModal(); // open the dialog
    }

    // When user clicks on <span> (x), close the modal
    span.onclick = function() {
        dialog.close(); // close the dialog
    }

    cancelBtn.onclick = function() {
        dialog.close();
    }

    // When user clicks anywhere outside the modal. close it
    // window.onclick = function(event) {
    //     if (event.target == dialog){
    //         modal.style.display = 'none';
    //     }
    // }

    //When form is submitted, add new book to library
    form.onsubmit = function(event) {
        event.preventDefault(); // without action, default action will redirect to page

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const hasRead = document.getElementById('hasRead').ariaChecked;

        addBookToLibrary(title, author, pages, hasRead);

        // Close the dialog and reset the form
        dialog.close();
        form.reset();
    }

})  