#! /usr/bin/env node
const { exec } = require('child_process');
const { bru } = require('@usebruno/cli');

exec('bru run --env development', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing command: ${error.message}`);
        return;
    }
    console.log(`Output: ${stdout}`);
});  