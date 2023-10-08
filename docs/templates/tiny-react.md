# Tiny React App

-   Built using [Parcel](https://parceljs.org/)
-   Git branch: https://github.com/sethdavis512/jarvis/tree/tiny-react

## Generator

```js title="plopfile.js"
export default function ({ setGenerator }) {
    setGenerator('tiny-react', {
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
                templateFiles: `plop-templates/tiny-react/**/*.hbs`,
                base: `plop-templates/tiny-react`
            }
        ]
    });
}
```

## Files

:::info

Use a variable name that doesn't exist to create hidden files

:::

```bash title="{{zzz}}.gitignore"
node_modules
dist
.parcel-cache
```

```tsx title="App.tsx.hbs"
export default function App() {
    return (
        <>
            <h1>Hello world!</h1>
            <p>App name: {{ pascalCase name }}</p>
        </>
    );
}
```

```html title="index.html.hbs"
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>{{ titleCase name }}</title>
    </head>

    <body>
        <div id="app"></div>
        <script type="module" src="index.tsx"></script>
    </body>
</html>
```

```tsx title="index.tsx.hbs"
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('app');
const root = createRoot(container!);

root.render(<App />);
```

```json title="package.json.hbs"
{
    "name": "{{ kebabCase name }}",
    "version": "0.0.1",
    "description": "",
    "main": "index.js",
    "scripts": {
        "start": "parcel index.html"
    },
    "keywords": [],
    "author": "Your Name",
    "license": "ISC",
    "dependencies": {
        "react": "^18.2.0",
        "react-dom": "^18.2.0"
    },
    "devDependencies": {
        "@types/react": "^18.0.15",
        "parcel": "^2.6.2",
        "process": "^0.11.10"
    }
}
```

```json title="tsconfig.json.hbs"
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "jsx": "react-jsx",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    }
}
```

## Download zip

https://github.com/sethdavis512/jarvis/archive/refs/heads/use-state-machine.zip
