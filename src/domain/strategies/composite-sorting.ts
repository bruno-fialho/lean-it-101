import { BookProps } from '../@types/book'
import { Direction, Sorting } from './sorting'

export type CompositeSortingCriteria = {
  strategy: Sorting
  direction: Direction
}

export interface CompositeSorting {
  compositeSort(books: BookProps[]): BookProps[]
}
