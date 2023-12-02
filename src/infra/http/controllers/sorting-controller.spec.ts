import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { booksWithDuplicateAuthorsData } from 'test/data'
import { BookProps } from '@/domain/@types/book'

let books: BookProps[]

describe('Sorting (e2e)', () => {
  beforeAll(async () => {
    books = booksWithDuplicateAuthorsData

    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to sort by author and title in ascending order', async () => {
    const response = await request(app.server)
      .post('/sorting?author=asc&title=asc')
      .send({
        books,
      })

    expect(response.statusCode).toEqual(200)
    expect(response.body.sortedBooks).toEqual([
      expect.objectContaining({ id: 'Book 3' }),
      expect.objectContaining({ id: 'Book 6' }),
      expect.objectContaining({ id: 'Book 1' }),
      expect.objectContaining({ id: 'Book 2' }),
      expect.objectContaining({ id: 'Book 5' }),
      expect.objectContaining({ id: 'Book 4' }),
    ])
  })

  it('should be able to sort by author and edition in ascending order', async () => {
    const response = await request(app.server)
      .post('/sorting?author=asc&edition=asc')
      .send({
        books,
      })

    expect(response.statusCode).toEqual(200)
    expect(response.body.sortedBooks).toEqual([
      expect.objectContaining({ id: 'Book 3' }),
      expect.objectContaining({ id: 'Book 1' }),
      expect.objectContaining({ id: 'Book 6' }),
      expect.objectContaining({ id: 'Book 2' }),
      expect.objectContaining({ id: 'Book 4' }),
      expect.objectContaining({ id: 'Book 5' }),
    ])
  })
})
