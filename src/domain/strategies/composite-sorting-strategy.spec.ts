import { booksWithDuplicateAuthorsData } from 'test/data'
import { AuthorSortingStrategy } from './author-sorting-strategy'
import { CompositeSortingStrategy } from './composite-sorting-strategy'
import { TitleSortingStrategy } from './title-sorting-strategy'
import { BookProps } from '../@types/book'
import { EditionYearSortingStrategy } from './edition-year-sorting-strategy'

let firstStrategy: AuthorSortingStrategy
let secondStrategy: TitleSortingStrategy
let compositeStrategy: CompositeSortingStrategy
let books: BookProps[]

describe('Composite Sorting Strategy', () => {
  beforeEach(() => {
    firstStrategy = new AuthorSortingStrategy()

    books = booksWithDuplicateAuthorsData
  })

  it('should be able to sort by author and title in ascending order', () => {
    secondStrategy = new TitleSortingStrategy()

    compositeStrategy = new CompositeSortingStrategy([
      { strategy: secondStrategy, direction: 'ascending' },
      { strategy: firstStrategy, direction: 'ascending' },
    ])

    const sortedBooks = compositeStrategy.compositeSort(books)

    expect(sortedBooks).toEqual([
      expect.objectContaining({ id: 'Book 3' }),
      expect.objectContaining({ id: 'Book 6' }),
      expect.objectContaining({ id: 'Book 1' }),
      expect.objectContaining({ id: 'Book 2' }),
      expect.objectContaining({ id: 'Book 5' }),
      expect.objectContaining({ id: 'Book 4' }),
    ])
  })

  it('should be able to sort by author and edition in ascending order', () => {
    secondStrategy = new EditionYearSortingStrategy()

    compositeStrategy = new CompositeSortingStrategy([
      { strategy: secondStrategy, direction: 'ascending' },
      { strategy: firstStrategy, direction: 'ascending' },
    ])

    const sortedBooks = compositeStrategy.compositeSort(books)

    expect(sortedBooks).toEqual([
      expect.objectContaining({ id: 'Book 3' }),
      expect.objectContaining({ id: 'Book 1' }),
      expect.objectContaining({ id: 'Book 6' }),
      expect.objectContaining({ id: 'Book 2' }),
      expect.objectContaining({ id: 'Book 4' }),
      expect.objectContaining({ id: 'Book 5' }),
    ])
  })
})
