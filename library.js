document.addEventListener('DOMContentLoaded', () => {

    const myLibrary = [];

    function Book(title, author, pages, hasRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead;
    }

    // Prototype method to toggle the read status of Book
    Book.prototype.toggleReadStatus = function() {
        this.hasRead = !this.hasRead; // swap true and false
    }

    // Add an infor method to the Book prototype
    Book.prototype.info = function () {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.hasRead ? 'read' : 'not read yet'}`;
    }

    function addBookToLibrary(title, author, pages, hasRead) {
        const newBook = new Book(title, author, pages, hasRead);
        myLibrary.push(newBook);
        // console.log('New book added: ', newBook.info());
        // console.log('Current library:', myLibrary)
        displayLibrary();
    }

    // Function to remove a Book from the library
    function removeBookFromLibrary(index){
        myLibrary.splice(index, 1);
        displayLibrary();
    }

    // Function to toggle the read status of a book
    function toggleReadStatus(index) {
        myLibrary[index].toggleReadStatus();
        displayLibrary();
    }


    function displayLibrary() {

        const bookshelf = document.getElementById('bookshelf');
        bookshelf.innerHTML = "";

        myLibrary.forEach((book, index)=> {
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
            hasRead.textContent = book.hasRead ? 'Status: Have Read' : "Status: Not Read";
            card.appendChild(hasRead);

            // Create remove button element
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                removeBookFromLibrary(index);
            });
            card.appendChild(removeButton);

            // Create toggle Read status button element
            const toggleButton = document.createElement('button');
            toggleButton.textContent = book.hasRead ? 'Not Read' : "Have Read";
            toggleButton.addEventListener('click', () => {
                toggleReadStatus(index);
            });
            card.appendChild(toggleButton);

            // Append the card to bookshelf
            bookshelf.appendChild(card);
        })
    }

    // Add books to library
    addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
    addBookToLibrary('1984', 'George Orwell', 328, true);
    addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, false)

    // Dialog modal and form handling
    const dialog = document.getElementById('bookDialog');
    const btn = document.getElementById('addBook');
    const form = document.getElementById('bookForm')
    const cancelBtn = document.getElementById('cancelButton')
    const span = document.querySelector('.close');
    const submitBtn = document.getElementById('submitButton');

    // When user clicks on the button, open the modal
    btn.onclick = function () {
        dialog.showModal(); // open the dialog
    }

    // When user clicks on <span> (x), close the modal
    span.onclick = function () {
        dialog.close(); // close the dialog
    }

    cancelBtn.onclick = function () {
        dialog.close();
    }

    // When user clicks anywhere outside the modal. close it
    window.onclick = function(event) {
        if (event.target == dialog){
            dialog.close();
        }
    }

    //When form is submitted, add new book to library
    submitBtn.onclick = function (event) {
        event.preventDefault(); // without action, default action will redirect to page

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const hasRead = document.querySelector('input[name="hasRead"]:checked').value === 'true';

        addBookToLibrary(title, author, pages, hasRead);

        // Close the dialog and reset the form
        dialog.close();
        form.reset();
    }
})  