import register from 'preact-custom-element'
import { useState } from 'preact/hooks'

export interface SimpleElementProps {
  htmlProp: string
}

const Simple = ({htmlProp}: SimpleElementProps) => {
  const [counter, setCounter] = useState(1)
  return (
    <div className="border-4 border-sky-700 p-4 rounded-md">
      <div>This is a Preact Web Component</div>
      <div>Prop from HTML: {htmlProp}</div>
      <div class="flex justify-between items-center">
        <div> useState Counter: {counter}</div>
        <button className="bg-sky-800 rounded-md px-2 py-1" onClick={() => setCounter(counter + 1)}>Add</button>
      </div>
    </div>
  )
}

register(Simple, 'simple-el', ['html-prop'])
