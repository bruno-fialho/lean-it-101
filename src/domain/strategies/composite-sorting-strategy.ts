import { BookProps } from '../@types/book'
import { CompositeSorting, CompositeSortingCriteria } from './composite-sorting'

export class CompositeSortingStrategy implements CompositeSorting {
  private strategies: CompositeSortingCriteria[]

  constructor(strategies: CompositeSortingCriteria[]) {
    this.strategies = strategies
  }

  compositeSort(books: BookProps[]): BookProps[] {
    return this.strategies.reduce((sortedBooks, { strategy, direction }) => {
      return strategy.sort(sortedBooks, direction)
    }, books)
  }
}
