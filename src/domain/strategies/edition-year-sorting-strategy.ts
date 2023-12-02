import { BookProps } from '../@types/book'
import { Direction, Sorting } from './sorting'

export class EditionYearSortingStrategy implements Sorting {
  sort(books: BookProps[], direction: Direction) {
    if (direction.toString() === 'ascending') {
      return books.sort((a, b) => a.editionYear - b.editionYear)
    } else {
      return books.sort((a, b) => b.editionYear - a.editionYear)
    }
  }
}
