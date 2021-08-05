import chalk from 'chalk';
import { createGaskunkMessage } from '../messages/internal';
import { init } from './init';

export const commands = (
  appInit: string,
  projectName: string,
  srcDir: string,
  publishDir: string
) => {
  console.log(chalk.bold(createGaskunkMessage('Welcome!')));

  if (appInit === 'init') {
    init(projectName, srcDir, publishDir);
  } else {
    // output error
  }
};
