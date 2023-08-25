import * as elements from 'typed-html'

export const registerRoute = (app: any) => {
  app.get("/main", Main)
}

const Main = () => {
  return (
    <div class="border border-green-700 p-4 rounded-md">
      <div>This is a Server-rendered HTMX element</div>
      <script type="module" src="/public/simple.component.js" />
      <simpleEl testString="foobar"></simpleEl>
    </div>
  )
}

