// A small token service: GET /token?size=21 answers a random URL-safe token of that length.
import { createServer } from 'node:http'
import { nanoid } from 'nanoid'

const server = createServer((request, response) => {
  const url = new URL(request.url, 'http://localhost')
  if (url.pathname !== '/token') {
    response.writeHead(404).end()
    return
  }
  // The caller chooses the token's length.
  const size = Number(url.searchParams.get('size') ?? 21)
  response.writeHead(200, { 'content-type': 'application/json' })
  response.end(JSON.stringify({ token: nanoid(size) }))
})

server.listen(Number(process.env.PORT ?? 8080))
