# htmx-preact

This is an example project using Bun, HTMX, Tailwind, and Preact for a full-stack application.

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

