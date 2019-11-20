/* eslint-disable no-console */

/**
 * This script copies all the (typically manually created) .d.ts
 * files from src/ to dist/.
 *
 * If the dist/ files already exist, a comparison is made and an
 * error is shown to avoid collisions with `tsc` output.
 */

const path = require('path');
const fse = require('fs-extra');
const glob = require('glob');

async function filesAreEqual(src, dst) {
  const b1 = await fse.readFile(src);
  const b2 = await fse.readFile(dst);
  return b1.compare(b2) === 0;
}

async function run() {
  const typeFiles = glob.sync('**/*.d.ts', {
    cwd: path.resolve(process.cwd(), 'src'),
  });

  await Promise.all(
    typeFiles.map(async file => {
      const src = path.resolve(__dirname, '../src', file);
      const dst = path.resolve(__dirname, '../dist', file);
      if ((await fse.exists(dst)) && !(await filesAreEqual(src, dst))) {
        console.error(`ERROR: dist/${file} already exists in another shape -- aborting.`);
        console.log(`       This can be due to tsc emitting a file with the same`);
        console.log(`       name as a file already defined in src/${file}.`);
        process.exit(1);
      } else {
        await fse.copy(src, dst);
        console.log(`Copied src/${file} to dist/${file}`);
      }
    })
  );
}

run();
