---
slug: /
---

# Custom File Generator

As a developer who works on multiple React projects daily, I like having a tool that can help me quickly and efficiently write consistent code. One of the best ways I've found is writing a custom command line tool to rapidly scaffold out my most common code patterns.

My tool of choice is [Plop.js](https://plopjs.com/). Plop is a powerful "micro-generator framework" built to help maintain patterns as well as speed up your project build time. From the documenation:

> If you boil plop down to its core, it is basically glue code between [inquirer](https://github.com/SBoudrias/Inquirer.js/) prompts and [handlebar](https://github.com/wycats/handlebars.js/) templates.

In this tutorial, we'll build out a simple React component generator for your Typescript projects. By the end, you'll have a fully functioning CLI that is customized to your file generating needs. Let's get started.

:::info

You must have `node` & `npm` installed to complete the tutorial

:::

For more information, visit [https://nodejs.org/](https://nodejs.org/).
