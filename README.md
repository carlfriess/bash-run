# bash-run

A simple framework for invoking bash commands from node.js scripts.

## Example

```js
const { run, runSync } = require("bash-run");

runSync(`echo "Hello, World!" > hello.txt`);

run("cat hello.txt").then(() => {
    console.log("success!");
}).catch((code) => {
    console.log(`failed with exit code ${code}`);
});
```
