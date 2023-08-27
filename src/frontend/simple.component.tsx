import register from 'preact-custom-element'
import { useState } from 'preact/hooks'
import { useHtmx } from './hooks/useHtmx';

const Simple = ({htmlProp}: JSX.SimpleElement) => {
  const [counter, setCounter] = useState(1)
  const ref = useHtmx();

  return (
    <div className="border-4 border-sky-700 p-4 rounded-md">
      <div>This is a Preact Web Component!</div>
      <div>Prop from HTML: {htmlProp}</div>
      <div class="flex justify-between items-center">
        <div> useState Counter: {counter}</div>
        <button className="bg-sky-800 rounded-md px-2 py-1" onClick={() => setCounter(counter + 1)}>Add</button>
      </div>

      <div ref={ref} hx-get="/another" hx-trigger="load" />
    </div>
  )
}

register(Simple, 'simple-el', ['html-prop'])
