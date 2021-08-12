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
  .argument('<type>', "choose 'init' or 'migrate' (required)")
  .argument('<project-name>', 'project name (required)')
  .argument('[src-directory]', "project's src directory (default: src)")
  .argument(
    '[publish-directory]',
    "project's publish directory (default: dist)"
  )
  .usage(
    `${chalk.yellow('<type>')} ${chalk.yellow('<project-name>')} ${chalk.green(
      '[src-directory]'
    )} ${chalk.green('[publish-directory]')} `
  )
  .action((type, projectName, srcDir, publishDir) => {
    commands(type, projectName, srcDir ?? 'src', publishDir ?? 'dist');
  })
  .parse(process.argv);
