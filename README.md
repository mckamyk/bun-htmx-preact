# htmx-preact

This is an example project using Bun, HTMX, Tailwind, and Preact for a full-stack application.

The latest version of Bun (`v0.8.0`) breaks file watcher for me. Downgrade to or install the previous
```sh
curl -fsSL https://bun.sh/install | bash -s bun-v0.7.3
```

```bash
bun install
bun devv # yes, two v's here
```

## Note on JSX/TSX files

All jsx/tsx files need to be in the correct `src/frontend` or `src/backend` folders. Backend components have their JSX compiled with `typed-html`, where frontend components are compiled with `preact`.
Currently, JSX/TSX cannot be multi-homed. Meaning if they're used in `frontend`, they cannot be imported into `backend`, and vice versa.

Standard .ts files can be placed and imported anywhere. Its just JSX transpilation that needs to be in the respective folders.
Although do note, backend components do not have access to hooks like `useState()`

#### class and className

- `src/frontend` JSX uses `className="bg-slate-500"`
- `src/backend` JSX uses `class="bg-slate-500"`

## Backend Components

`src/backend` is structed normally, be sure to import and add the htmx routes from `src/index.ts`. Look at `src/backend/main.tsx` exported function as an example, as well as how to load the Preact components

## Frontend Components

For frontend Preact Components, your top-level components should be named `myComponent.component.tsx`.
This tells the bundler where to find the top-level components.
All front-end files and components that aren't top-level can just be `myChildComponent.tsx`.

Frontend components are rendered in separate VDOMs. This means that \(p\)react context + providers will only work within a particular component.
Two separate components cannot share a context/provider. You'll need to use a document-level storage to communicate between components.

You must register the top-level components as a web component.

```js
// src/frontend/myComponent.component.tsx
import preactComponent from 'preact-custom-element'

const MyComponent = () => {
    return (
        <div>Hello, world!</div>
    )
}

preactComponent(MyComponent, 'my-component')
```

This is what registers them, capable to be rendered in the browser in HTML.

You can include props as well.

```js
// src/frontend/myComponent.component.tsx
import preactComponent from 'preact-custom-element'

export type MyComponentProps = {
    inputString: string // use camelCase here
}

const MyComponent = ({inputString}: MyComponentProps) => {
    return (
        <div>Hello, {inputString}!</div>
    )
}

//                            v tag name      v html attributes to watch
preactComponent(MyComponent, 'my-component', ['input-string']) // use kebab-case version of the name/attributes
```

To get type hinting in your editor, you'll need to add the information to the JSX namespace

```ts
// src/components.d.ts

declare namespace JSX {
    interface MyComponent {
        inputString: string
    }

    interface IntrinsicElements {
        myComponent: MyComponent
    }
}
```

Now, you get type safety and hinting when writing the backend code.

```ts
// src/backend/main.tsx

export const registerRoute = (app: any) => {
    app.get('/main', Main)
}

const Main = () => {
    return (
        <div>
            <script type="module" src="/public/myComponent.component.js" />
            <my-component></my-component> // ❌ inputString is required!
            <my-component inputString="galaxy"></my-component> // ✅ 
        </div>
    )
}
```

