import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

import { authRoutes } from './routes/auth'


async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  })

  await fastify.register(cors, {
    origin: true,
  })

  await fastify.register(jwt, {
    secret: 'nlwcopa' // em produção é preciso que essa informação seja uma variável de ambiente
  })

  await fastify.register(authRoutes)

  await fastify.listen({ port: 3333, host: '0.0.0.0' })
}

bootstrap()