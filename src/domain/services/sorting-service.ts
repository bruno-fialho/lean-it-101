import { BookProps } from '../@types/book'
import { Direction, Sorting } from '../strategies/sorting'

export class SortingService {
  private sorting: Sorting

  constructor(sorting: Sorting) {
    this.sorting = sorting
  }

  setSorting(sorting: Sorting): void {
    this.sorting = sorting
  }

  sortBooks(books: BookProps[], direction: Direction): BookProps[] {
    return this.sorting.sort(books, direction)
  }
}
