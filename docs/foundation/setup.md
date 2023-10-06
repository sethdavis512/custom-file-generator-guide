# Setup

Here's the funnest part, you get to name your CLI! I'm going to call mine `jarvis`.

Start by creating a directory and changing into that directory:

```bash
mkdir jarvis && cd jarvis
```

Initialize git repo:

```bash
git init
```

Ignore `node_modules`:

```bash
echo "node_modules" > .gitignore
```

Add a `README.md`:

```bash
echo "# Jarvis CLI" > README.md
```

Initialize a package.json file:

```bash
npm init -y
```

## Modify `package.json`

Add a `bin` key. This will be the command line tool's name:

```json title="package.json"
"bin": {
    "jarvis": "./index.js"
},
```

Change the scripts section to include a `plop` script:

```json title="package.json"
"scripts": {
    "plop": "plop"
},
```

## Install `plop`

```bash
npm i -D plop
```

Create the index file where our plop setup is going to live:

```bash
touch index.js
```

Add Plop CLI instructions ([source](https://plopjs.com/documentation/#wrapping-plop)) by copying the following code into your `index.js` file:

```js title="index.js"
#!/usr/bin/env node
import path from 'node:path';
import minimist from 'minimist';
import { Plop, run } from 'plop';

const args = process.argv.slice(2);
const argv = minimist(args);

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const config = {
    cwd: argv.cwd,
    configPath: path.join(__dirname, 'plopfile.js'),
    preload: argv.preload || [],
    completion: argv.completion
};

const callback = (env) => Plop.execute(env, run);

Plop.prepare(config, callback);
```

The main take away from the code above is that Plop will launch in the current working directory and it will allow you pass parameters to your command line tool (more on this later).
