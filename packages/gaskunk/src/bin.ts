#! /usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';
import { commands } from './commands';

// https://docs.npmjs.com/cli/v7/using-npm/scripts#packagejson-vars
const pkg = {
  version: process.env.npm_package_version ?? '',
};

program
  .version(pkg.version)
  .argument('<init>', 'initialize the project for gaskunk')
  .argument('<project-name>', 'project name')
  .argument('[src-directory]', "project's src directory (default: src)")
  .argument(
    '[publish-directory]',
    "project's publish directory (default: dist)"
  )
  .usage(
    `${chalk.yellow('<init>')} ${chalk.yellow('<project-name>')} ${chalk.green(
      '[src-directory]'
    )} ${chalk.green('[publish-directory]')} `
  )
  .action((init, projectName, srcDir, publishDir) => {
    commands(init, projectName, srcDir ?? 'src', publishDir ?? 'publish');
  })
  .parse(process.argv);
