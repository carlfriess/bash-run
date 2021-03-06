const { spawn, spawnSync } = require('child_process');

function run(cmd) {
    return new Promise((resolve, reject) => {
        const child = spawn("/bin/bash", ["-c", cmd], {stdio: "inherit"});
        child.on("error", err => {
            console.error(err);
            reject();
        });
        child.on("close", code => {
            if (code !== 0) {
                reject(code);
            } else {
                resolve(0);
            }
        });
    });
}

function runSync(cmd) {
    const child = spawnSync("/bin/bash", ["-c", cmd], {stdio: "inherit"});
    if (child.error) {
        console.error(child.error);
    }
    if (child.status !== 0) {
        throw child.status;
    }
    return child.status;
}

function runPipeSync(cmd) {
    const child = spawnSync("/bin/bash", ["-c", cmd], {stdio: "pipe"});
    if (child.error) {
        console.error(child.error);
    }
    if (child.status !== 0) {
        throw child.status;
    }
    return child.stdout;
}

module.exports = { run, runSync, runPipeSync };
