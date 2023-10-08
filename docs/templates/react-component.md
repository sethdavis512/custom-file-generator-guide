# React component (TypeScript)

Git branch: https://github.com/sethdavis512/jarvis/tree/react-component

## Generator

```js title="plopfile.js"
export default function ({ setGenerator }) {
    setGenerator('react-component', {
        description: 'React component (TypeScript)',
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
                templateFiles: `plop-templates/react-component/**/*.hbs`,
                base: `plop-templates/react-component`
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

## Download zip

https://github.com/sethdavis512/jarvis/archive/refs/heads/react-component.zip
