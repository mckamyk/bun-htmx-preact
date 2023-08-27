import * as elements from 'typed-html'

export const Simple = ({htmlProp}: {htmlProp?: string}) => {
  return (
    <div>
      <script src="/public/simple.component.js" type="module"></script>
      <simpleEl htmlProp={htmlProp || ""} />
    </div>
  )
}
