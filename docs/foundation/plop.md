# Plop

Time to make a plopfile - for the next few steps, I'm going to take a more granular approach. Each step will add to the same chunk of code which will end up being the full `plopfile` code. Let's make the file:

```bash
touch plopfile.js
```

For starters, you'll need to export a default function with `plop` as an argument. In `plopfile.js`, add:

```js title="plopfile.js"
export default function (plop) {
    // ...
}
```

Plop has a method called `setGenerator`. It takes an array of `prompts` and an array `actions`. Based on the answers from the `prompts` you will get a customized output. Here we'll create our first generator, called `ts-component`:

```js title="plopfile.js"
export default function (plop) {
    plop.setGenerator('ts-component', {
        description: 'A React component and unit test written in Typescript',
        prompts: [],
        actions: []
    });
}
```

Remember when `inquirer` was mentioned earlier? Here's where we'll use our [inquirer prompt types](https://github.com/SBoudrias/Inquirer.js#prompt). We'll be needing a `name` for our component, so add an `input` prompt to our array of prompts, like this:

```js title="plopfile.js"
export default function (plop) {
    plop.setGenerator('ts-component', {
        description: 'A React component and unit test written in Typescript',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Component name'
            }
        ],
        actions: []
    });
}
```

Next, we need to add an action. Plop has a few to choose from and for this tutorial, we'll be using the [`addMany` action](https://plopjs.com/documentation/#addmany). As the names suggests, it will add multiple files to the `destination` that we give it.

Add an object to the actions array, give it a `type` of `addMany`. For `destination` we'll use `${process.cwd()}/{{ pascalCase name }}`. This little string will point to the folder where the command was executed and create a folder with the `name` of your component in pascal case. The next key is the `templateFiles` which we have not created yet, go ahead and add it anyway. Lastly is the `base` key which chops the namespace to whatever you like ([see here for more](https://plopjs.com/documentation/#addmany)).

Your plopfile should now look like this:

```js title="plopfile.js"
export default function (plop) {
    plop.setGenerator('ts-component', {
        description: 'A React component and unit test written in Typescript',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Component name'
            }
        ],
        actions: [
            {
                type: 'addMany',
                destination: `${process.cwd()}/{{ pascalCase name }}`,
                templateFiles: 'plop-templates/ts-component',
                base: 'plop-templates/ts-component'
            }
        ]
    });
}
```
