import fastify from 'fastify'
import { ZodError } from 'zod'

import { env } from './infra/env'
import { sorting } from './infra/http/controllers/sorting-controller'

export const app = fastify()

app.post('/sorting', sorting)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO: Should log to an external tool like Datadog/NewRelic/Sentry
  }

  return reply.status(500).send({ message: 'Internal server error.' })
})
