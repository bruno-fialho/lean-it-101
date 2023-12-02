import { BookProps } from '../@types/book'
import { Direction, Sorting } from './sorting'

export class TitleSortingStrategy implements Sorting {
  sort(books: BookProps[], direction: Direction) {
    if (direction.toString() === 'ascending') {
      return books.sort((a, b) => a.title.localeCompare(b.title))
    } else {
      return books.sort((a, b) => b.title.localeCompare(a.title))
    }
  }
}
