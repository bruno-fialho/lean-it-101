import { booksData } from 'test/data'
import { AuthorSortingStrategy } from './author-sorting-strategy'
import { BookProps } from '../@types/book'

let strategy: AuthorSortingStrategy
let books: BookProps[]

describe('Author Sorting Strategy', () => {
  beforeEach(() => {
    strategy = new AuthorSortingStrategy()

    books = booksData
  })

  it('should be able to sort by author in ascending order', () => {
    const sortedBooks = strategy.sort(books, 'ascending')

    expect(sortedBooks).toEqual([
      expect.objectContaining({ id: 'Book 3' }),
      expect.objectContaining({ id: 'Book 1' }),
      expect.objectContaining({ id: 'Book 2' }),
      expect.objectContaining({ id: 'Book 4' }),
    ])
  })

  it('should be able to sort by author in descending order', () => {
    const sortedBooks = strategy.sort(books, 'descending')

    expect(sortedBooks).toEqual([
      expect.objectContaining({ id: 'Book 4' }),
      expect.objectContaining({ id: 'Book 2' }),
      expect.objectContaining({ id: 'Book 1' }),
      expect.objectContaining({ id: 'Book 3' }),
    ])
  })
})
