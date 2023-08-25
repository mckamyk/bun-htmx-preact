import preactwc from 'preact-custom-element'

const FooComponent = () => {
  return (
    <div>This is another Preact Component</div>
  )
}

preactwc(FooComponent, 'foo-component')
