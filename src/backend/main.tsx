import * as elements from 'typed-html'
import { Another } from './another'
import { Simple } from './simple'

export const registerRoute = (app: any) => {
  app.get("/main", Main)
  app.get("/another", Another)
  app.get("/simple", Simple)
}

const Main = () => {
  return (
  <div class="flex justify-center mt-[300px]">
    <div class="max-w-[800px] border-4 border-green-700 p-4 rounded-md">
      <Simple htmlProp='galaxy' />
      <fooComponent></fooComponent>
    </div>
  </div>
  )
}

