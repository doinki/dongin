import { promisify } from 'node:util';

import chalk from 'chalk';
import figlet from 'figlet';

const figletAsync = promisify(figlet);

export async function run() {
  console.log(chalk.gray(await figletAsync('Dongin')));
  console.log();

  [
    ['GitHub', 'https://github.com/doinki'],
    ['Email', 'doinki94@gmail.com'],
  ].forEach(([label, value]) => {
    console.log([label, chalk.cyanBright(value)].join(' : '));
  });
}

if (process.env.NODE_ENV !== 'production') {
  run();
}
