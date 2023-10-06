# React component (TypeScript)

## Generator

```js title="plopfile.js"
export default function ({ setGenerator }) {
    setGenerator('ts-component', {
        description: 'Tiny React app built using Parcel',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Name'
            }
        ],
        actions: [
            {
                type: 'addMany',
                destination: `${process.cwd()}/{{ kebabCase name }}/`,
                templateFiles: `plop-templates/ts-component/**/*.hbs`,
                base: `plop-templates/ts-component`
            }
        ]
    });
}
```

## Files

```ts title="index.ts.hbs"
export { default } from './{{ pascalCase name }}';
```

```tsx title="{{name}}.tsx.hbs"
import React, { ReactNode } from 'react';

interface {{name}}Props {
    children: ReactNode;
}

export default function {{name}}({ children }: {{name}}Props): JSX.Element {
    return <>{children}</>;
}
```
