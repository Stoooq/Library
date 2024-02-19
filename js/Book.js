class Book {
    constructor (
        author = '',
        title = '',
        pages = '0',
        isRead = false
    ) {
        this.author = author
        this.title = title
        this.pages = pages
        this.isRead = isRead
    }
}

export default Book