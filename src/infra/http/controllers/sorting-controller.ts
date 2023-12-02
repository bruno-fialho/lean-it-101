import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

import { AuthorSortingStrategy } from '@/domain/strategies/author-sorting-strategy'
import { CompositeSortingStrategy } from '@/domain/strategies/composite-sorting-strategy'
import { EditionYearSortingStrategy } from '@/domain/strategies/edition-year-sorting-strategy'
import { TitleSortingStrategy } from '@/domain/strategies/title-sorting-strategy'
import { Direction } from '@/domain/strategies/sorting'
import { CompositeSortingCriteria } from '@/domain/strategies/composite-sorting'

export async function sorting(request: FastifyRequest, reply: FastifyReply) {
  const sortingQuerySchema = z.object({
    author: z.enum(['asc', 'desc']).optional(),
    title: z.enum(['asc', 'desc']).optional(),
    edition: z.enum(['asc', 'desc']).optional(),
  })

  const sortingBodySchema = z.object({
    id: z.string(),
    title: z.string(),
    author: z.string(),
    editionYear: z.number(),
  })

  const sortingArrayBodySchema = z.object({
    books: z.array(sortingBodySchema),
  })

  try {
    const query = sortingQuerySchema.parse(request.query)

    const { books } = sortingArrayBodySchema.parse(request.body)

    const directionParsed: Record<string, Direction> = {
      asc: 'ascending',
      desc: 'descending',
    }

    const sortingCriteria: CompositeSortingCriteria[] = []

    for (const [attribute, direction] of Object.entries(query)) {
      switch (attribute) {
        case 'author':
          sortingCriteria.push({
            strategy: new AuthorSortingStrategy(),
            direction: direction
              ? directionParsed[direction]
              : directionParsed.asc,
          })
          break
        case 'title':
          sortingCriteria.push({
            strategy: new TitleSortingStrategy(),
            direction: direction
              ? directionParsed[direction]
              : directionParsed.asc,
          })
          break
        case 'edition':
          sortingCriteria.push({
            strategy: new EditionYearSortingStrategy(),
            direction: direction
              ? directionParsed[direction]
              : directionParsed.asc,
          })
          break
      }
    }

    const compositeSortingStrategy = new CompositeSortingStrategy(
      sortingCriteria.reverse(),
    )

    const sortedBooks = compositeSortingStrategy.compositeSort(books)

    return reply.status(200).send({ sortedBooks })
  } catch (error) {
    console.error(error)
    if (error instanceof z.ZodError) {
      return reply
        .status(400)
        .send({ message: 'Validation error.', issues: error.errors })
    }
    return reply.status(500).send({ message: 'Internal server error.' })
  }
}
