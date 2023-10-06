# Templates

Here is where all of our templats are going to live. From the `root`, run:

```bash
mkdir plop-templates
```

I personally like having a folder for each of my generators. That way when I use `addMany` I can have the entire folder "copied" instead of individually adding single files with the `add` action.

Inside of the `plop-templates` directory, make a `ts-component` directory:

```bash
mkdir ts-component
```

Let's make some ts-component template files. While in the `ts-component` directory, run:

```bash
touch index.ts.hbs
```

Here's our first usage of the `handlebars` ([docs](https://handlebarsjs.com/)) template. The `.hbs` extension will be removed once we run the action. Inside `index.ts.hbs`, add:

```js
export { default } from './{{ pascalCase name }}';
```

This file is more of a personal preference, sometimes called a "barrel" file. It allows you to write imports a little cleaner. Instead of having `../components/Button/Button` be your import, you can just write `../components/Button`.

Next we're going to use a funky file name that plop will use to create our unique file name:

```bash
touch "{{ pascalCase name }}.tsx.hbs"
```

In the `{{ pascalCase name }}.tsx.hbs`, let's drop some Handlbar syntax into our component template file:

```js title="{{ pascalCase name }}.tsx.hbs"
import React from 'react';

export default function {{ pascalCase name }}({ children }): JSX.Element {
    return <div>{children}</div>;
}

```

Again, you'll see `pascalCase` added. That's a plop [case modifier](https://plopjs.com/documentation/#case-modifiers) - I recommend checking them out if you have different preferences.

If you'd like to see example repo, feel free to copy/clone [this example](https://github.com/sethdavis512/jarvis).
