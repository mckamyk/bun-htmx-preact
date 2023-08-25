import register from 'preact-custom-element'
import { useState } from 'preact/hooks'

export type SimpleElementProps = {
  testString: string
}

const Simple = ({testString}: SimpleElementProps) => {
  const [counter, setCounter] = useState(1)
  return (
    <div className="border border-sky-800 p-4 rounded-md">
      <div>This is a Preact Web Component</div>
      <div>Test String: {testString}</div>
      <div>Counter: {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
    </div>
  )
}

register(Simple, 'simple-el', ['test-string'])
