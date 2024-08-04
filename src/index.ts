import chalk from 'chalk';

export function run() {
  [
    ['GitHub', 'https://github.com/doinki'],
    ['Email', 'doinki94@gmail.com'],
  ].forEach(([label, value]) => {
    console.log(
      [chalk.gray(label), chalk.cyanBright(value)].join(chalk.gray(' : '))
    );
  });
}

if (process.env.NODE_ENV !== 'production') {
  run();
}
