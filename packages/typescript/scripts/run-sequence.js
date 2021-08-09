// @ts-check
const cp = require("child_process");
/**
 * 
 * @param {[string, string[]][]} tasks
 * @param {cp.SpawnSyncOptions} opts
 */
function runSequence(tasks, opts = { timeout: 100000, shell: true }) {
    let lastResult;
    for (const task of tasks) {
        console.log(`${task[0]} ${task[1].join(" ")}`);
        const result = cp.spawnSync(task[0], task[1], opts);
        if (result.status !== 0) throw new Error(`${task[0]} ${task[1].join(" ")} failed: ${result.stderr && "stderr: " + result.stderr.toString()}${result.stdout && "\nstdout: " + result.stdout.toString()}`);
        console.log(result.stdout && result.stdout.toString());
        lastResult = result;
    }
    return lastResult && lastResult.stdout && lastResult.stdout.toString();
}

exports.runSequence = runSequence;