const books: Book[] = []
const bookIds = new Set<number>()

interface BookInfo {
  title: string
  author: string
  id: number
}

class Book {
  title: string

  author: string

  id: number

  constructor(book: BookInfo) {
    const { title, author, id } = book
    this.title = title
    this.author = author
    this.id = id
  }

  extraInfo() {
    return `${this.title} by ${this.author}`
  }
}

const addBook = (book: BookInfo) => {
  if (bookIds.has(book.id)) {
    return books.find((b) => b.id === book.id)
  }
  books.push(new Book(book))
  return book
}

addBook({ title: '基督山伯爵', author: '大仲马', id: 1 })
addBook({ title: '三个火枪手', author: '大仲马', id: 2 })
