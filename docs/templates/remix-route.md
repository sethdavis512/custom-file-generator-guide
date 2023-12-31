# Remix route

Git branch: https://github.com/sethdavis512/jarvis/tree/remix-route

## Generator

```js title="plopfile.js"
export default function ({ setGenerator }) {
    setGenerator('remix-route', {
        description: 'Remix route in Typescript',
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
                destination: process.cwd(),
                templateFiles: 'plop-templates/remix-route/**/*.hbs',
                base: 'plop-templates/remix-route'
            }
        ]
    });
}
```

## Files

```hbs title="{{lowerCase name}}.tsx.hbs"
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({});
};

export const action = async ({ request }: ActionFunctionArgs) => {
  return null;
};

export default function {{pascalCase name}}Route() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>{...}</div>
  );
}
```

## Download zip

https://github.com/sethdavis512/jarvis/archive/refs/heads/remix-route.zip
