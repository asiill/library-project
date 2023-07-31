let library = [];

function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
}

const bookForm = document.getElementById("book-form");

const newBookBtn = document.getElementById("new-book-btn");

const errorMessage = document.getElementById("error-message");
const libraryContainer = document.getElementById("library-container");

function getBookFromInput() {
    let title = bookForm.title.value;
    let author = bookForm.author.value;
    let isRead = bookForm.isRead.checked;
    let newBook = new Book(title, author, isRead);
    return newBook;
}

function createBookContainer(book) {
    const bookContainer = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const isRead = document.createElement("button");
    const removeBookBtn = document.createElement("button");

    bookContainer.classList.add("book-container");
    isRead.classList.add("read-btn");
    removeBookBtn.classList.add("remove-book-btn");

    title.textContent = book.title;
    author.textContent = book.author;
    removeBookBtn.textContent = "Remove";

    if (book.isRead) {
        isRead.textContent = "Read";
    } else {
        isRead.textContent = "Not Read";
    }

    bookContainer.appendChild(title);
    bookContainer.appendChild(author);
    bookContainer.appendChild(isRead);
    bookContainer.appendChild(removeBookBtn);
    libraryContainer.appendChild(bookContainer);
}

function updateLibraryContainer() {
    libraryContainer.textContent = "";
    for (i = 0; i < library.length; i++){
        let book = library[i];
        createBookContainer(book);
    }
}

function toggleStatus(book) {

}

function isInLibrary(newBook) {
    return library.some(book => book.title === newBook.title && book.author === newBook.author);
}

function removeBookFromLibrary(book) {
    
}

function addBookToLibrary() {
    let newBook = getBookFromInput();
    if (isInLibrary(newBook)) {
        errorMessage.textContent = "* This book is already in the library";
        return;
    } else {
        library.push(newBook);
        updateLibraryContainer();
    }
}

bookForm.addEventListener("submit", function(e) {
    e.preventDefault();
    addBookToLibrary();
    bookForm.style.display = "none";
    bookForm.reset();
});