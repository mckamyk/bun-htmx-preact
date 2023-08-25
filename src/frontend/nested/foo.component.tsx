import preactwc from 'preact-custom-element'

const FooComponent = () => {
  return (
    <div className="mt-4 border-4 border-sky-700 p-4 rounded-md">This is another Preact Component</div>
  )
}

preactwc(FooComponent, 'foo-component')
