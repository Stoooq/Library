class Library {
    constructor() {
        this.books = []
    }

    addBook(newBook) {
        const duplicated = this.books.find((book) => book.title === newBook.title)
        if (duplicated) {
            window.alert("Taka ksiazka juz istnieje")
            return
        }
        this.books.push(newBook)
    }

    changeReadValue(title) {
        const sameBook = this.books.find((book) => book.title === title)
        
            if (sameBook.title === title) {
                console.log(sameBook);
                if (sameBook.isRead === true) {
                    sameBook.isRead = false
                } else if (sameBook.isRead === false) {
                    sameBook.isRead = true
                }
            }
    }

    removeBook(title) {
        this.books = this.books.filter((book) => book.title !== title)
    }
}

export default Library