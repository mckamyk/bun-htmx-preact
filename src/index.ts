import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { swagger } from '@elysiajs/swagger'
import { staticPlugin } from '@elysiajs/static'
import { logger } from './logger'
import { registerRoute } from './backend/main'

export const app = new Elysia()
  .use(swagger())
  .use(html())
  .use(logger())
  .use(staticPlugin({
    assets: 'dist',
    alwaysStatic: true,
  }))
  .on('beforeHandle', ctx => {
    ctx.log.info(ctx.request)
  })
  //@ts-ignore
  .get('/', ({ html }) => {
    return html(
      BaseHtml
    )
  })

registerRoute(app);

app.listen(3000)

console.log(`Listening at ${app.server?.hostname} on ${app.server?.port}`)

const BaseHtml = `
  <!DOCTYPE html> 
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="color-scheme" content="dark" />
      <title>HTMX + Preact</title>
      <script src="https://unpkg.com/htmx.org@1.9.3"></script>
      <script src="https://unpkg.com/htmx.org/dist/ext/debug.js"></script>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://unpkg.com/hyperscript.org"></script>
    </head>
    <body>
      <div hx-trigger="load" hx-get="/main" />
    </body>
  </html>
`
