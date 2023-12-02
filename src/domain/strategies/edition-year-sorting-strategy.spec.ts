import { BookProps } from '../@types/book'
import { EditionYearSortingStrategy } from './edition-year-sorting-strategy'
import { booksData } from 'test/data'

let strategy: EditionYearSortingStrategy
let books: BookProps[]

describe('Edition Sorting Strategy', () => {
  beforeEach(() => {
    strategy = new EditionYearSortingStrategy()

    books = booksData
  })

  it('should be able to sort by edition year in ascending order', () => {
    const sortedBooks = strategy.sort(books, 'ascending')

    expect(sortedBooks).toEqual([
      expect.objectContaining({ id: 'Book 1' }),
      expect.objectContaining({ id: 'Book 4' }),
      expect.objectContaining({ id: 'Book 2' }),
      expect.objectContaining({ id: 'Book 3' }),
    ])
  })

  it('should be able to sort by edition year in descending order', () => {
    const sortedBooks = strategy.sort(books, 'descending')

    expect(sortedBooks).toEqual([
      expect.objectContaining({ id: 'Book 3' }),
      expect.objectContaining({ id: 'Book 2' }),
      expect.objectContaining({ id: 'Book 4' }),
      expect.objectContaining({ id: 'Book 1' }),
    ])
  })
})
