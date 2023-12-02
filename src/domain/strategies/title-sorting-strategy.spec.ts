import { booksData } from 'test/data'
import { TitleSortingStrategy } from './title-sorting-strategy'
import { BookProps } from '../@types/book'

let strategy: TitleSortingStrategy
let books: BookProps[]

describe('Title Sorting Strategy', () => {
  beforeEach(() => {
    strategy = new TitleSortingStrategy()

    books = booksData
  })

  it('should be able to sort by title in ascending order', () => {
    const sortedBooks = strategy.sort(books, 'ascending')

    expect(sortedBooks).toEqual([
      expect.objectContaining({ id: 'Book 1' }),
      expect.objectContaining({ id: 'Book 3' }),
      expect.objectContaining({ id: 'Book 4' }),
      expect.objectContaining({ id: 'Book 2' }),
    ])
  })

  it('should be able to sort by title in descending order', () => {
    const sortedBooks = strategy.sort(books, 'descending')

    expect(sortedBooks).toEqual([
      expect.objectContaining({ id: 'Book 2' }),
      expect.objectContaining({ id: 'Book 4' }),
      expect.objectContaining({ id: 'Book 3' }),
      expect.objectContaining({ id: 'Book 1' }),
    ])
  })
})
