import { BookProps } from '../@types/book'
import { Direction, Sorting } from './sorting'

export class AuthorSortingStrategy implements Sorting {
  sort(books: BookProps[], direction: Direction) {
    if (direction.toString() === 'ascending') {
      return books.sort((a, b) => a.author.localeCompare(b.author))
    } else {
      return books.sort((a, b) => b.author.localeCompare(a.author))
    }
  }
}
