import Book from './Book.js';
import Library from './Library.js';

const library = new Library()

const header = document.querySelector('header')
const main = document.querySelector('main')
const form = document.querySelector('.form')
const authorInput = document.querySelector('#author')
const titleInput = document.querySelector('#title')
const pagesInput = document.querySelector('#pages')
const readInput = document.querySelector('#read')
const confirmBtn = document.querySelector('.confirm')
const addBookBtn = document.querySelector('.add-btn')
const booksContainer = document.querySelector('.books-container')

const openForm = () => {
    form.classList.toggle('hide')
    header.classList.toggle('blur')
    main.classList.toggle('blur')
}

const allBookProperties = () => {
    const author = authorInput.value
    const title = titleInput.value
    const pages = pagesInput.value
    const read = readInput.checked

    
    
    return new Book(author, title, pages, read)
}

const addBookToList = (newBook) => {
    const book = document.createElement('div')
    const author = document.createElement('p')
    const title = document.createElement('p')
    const pages = document.createElement('p')
    const isRead = document.createElement('div')
    const deleteBook = document.createElement('div')

    book.classList.add('book')
    author.classList.add('author')
    title.classList.add('title')
    pages.classList.add('pages')
    deleteBook.classList.add('delete-book')

    deleteBook.addEventListener('click', removeBook)

    author.textContent = newBook.author
    title.textContent = newBook.title
    pages.textContent = newBook.pages
    isRead.textContent = newBook.isRead ? 'Read' : 'Not Read'
    deleteBook.textContent = 'delete'

    isRead.textContent === 'Read' ? isRead.classList.add('read') : isRead.classList.add('not-read')

    isRead.addEventListener('click', changeReadValue)

    book.setAttribute('data-id', newBook.title)

    book.appendChild(author)
    book.appendChild(title)
    book.appendChild(pages)
    book.appendChild(isRead)
    book.appendChild(deleteBook)
    booksContainer.appendChild(book)

    form.classList.add('hide')
    header.classList.remove('blur')
    main.classList.remove('blur')
}

const showAllBooks = () => {
    reset()
    library.books.forEach(book => {
        addBookToList(book)
    })
}

const reset = () => {
    authorInput.value = ''
    titleInput.value = ''
    pagesInput.value = ''
    readInput.checked = ''
    booksContainer.textContent = ''
}

const changeReadValue = (e) => {
    const id = e.target.parentElement.getAttribute('data-id')
    library.changeReadValue(id)
    showAllBooks()
}

const removeBook = (e) => {
    const title = e.target.parentElement.getAttribute('data-id')
    library.removeBook(title)
    showAllBooks()
}

const addBook = () => {
    const newBook = allBookProperties()

    if (newBook.author === '') {
        alert('Add author')
        return
    }
    if (newBook.title === '') {
        alert('add title')
        return
    }
    if (newBook.pages === '') {
        alert('add pages')
        return
    }

    library.addBook(newBook)
    showAllBooks()
}

addBookBtn.addEventListener('click', openForm)
confirmBtn.addEventListener('click', addBook)