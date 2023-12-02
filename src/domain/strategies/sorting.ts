import { BookProps } from '../@types/book'

export type Direction = 'ascending' | 'descending'

export interface Sorting {
  sort(books: BookProps[], direction: Direction): BookProps[]
}
