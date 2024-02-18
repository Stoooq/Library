import { Book } from './Book.js';
import { Library } from './Library.js';

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

const createNewBook = () => {
    const author = authorInput.value
    const title = titleInput.value
    const pages = pagesInput.value
    const read = readInput.checked
    
    return new Book(author, title, pages, read)
}

const addBook = () => {
    const newBook = createNewBook()
    library.addBook(newBook)

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
    isRead.classList.add('is-read')
    deleteBook.classList.add('delete-book')

    author.textContent = authorInput.value
    title.textContent = titleInput.value
    pages.textContent = pagesInput.value
    isRead.textContent = readInput.checked
    deleteBook.textContent = 'delete'

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

addBookBtn.addEventListener('click', openForm)
confirmBtn.addEventListener('click', addBook)