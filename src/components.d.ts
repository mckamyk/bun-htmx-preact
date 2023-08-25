declare namespace JSX {
  interface SimpleElement {
    htmlProp: string
  }

  interface IntrinsicElements {
    simpleEl: SimpleElement
    fooComponent: {}
  }
}
