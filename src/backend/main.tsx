import * as elements from 'typed-html'
import { Another } from './another'

export const registerRoute = (app: any) => {
  app.get("/main", Main)
  app.get("/another", Another)
}

const Main = () => {
  return (
  <div class="flex justify-center mt-[300px]">
    <div class="max-w-[800px] border-4 border-green-700 p-4 rounded-md">
      <script type="module" src="/public/simple.component.js" />
      <script type="module" src="/public/nested/foo.component.js" />

      <div class="mb-2">This is a Server-rendered HTMX element</div>
      <simpleEl htmlProp="foobar"></simpleEl>
      <fooComponent></fooComponent>
    </div>
  </div>
  )
}

