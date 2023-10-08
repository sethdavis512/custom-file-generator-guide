# npm link

We are now at the point where we can link to npm globally. In the root of `jarvis` run:

```bash
npm link
```

If all goes well you should see a symlink get added to your computer and now you should be able to run `jarvis`.

You can use the `jarvis` command as is, it will prompt you for which generator (assuming you have more than one) OR you can pass args to `jarvis` in order to execute the generator instantly.

For the `ts-component` generator, the pseudo syntax would be:

```bash
<cli-name> <generator-name> <component-name>
```

A real world usage:

```bash title="Example"
jarvis ts-component Button
```

```bash title="Example output"
~/Desktop/playground
❯ jarvis
? Component name Button
✔  +! 2 files added
 -> /Users/seth/Desktop/cfg-playground/Button/index.ts
 -> /Users/seth/Desktop/cfg-playground/Button/Button.tsx
```

Tada! Button is ready to go!

## Alternative uses

Now that `jarvis` is working, think about the other file types you write daily. You don't just have to write Typescript files...Are you a blogger? Make a markdown template for your posts. Are you a Python dev? Have `jarvis` make you a script template.

The possibilities are limitless!
