import { output } from '../messages';
import { init } from './internal';
import fs from 'fs';

export const commands = (
  appInit: string,
  projectName: string,
  srcDir: string,
  publishDir: string
) => {
  output.info('Welcome!');

  if (fs.existsSync(projectName)) {
    output.error(`${projectName} is already exist`);
    process.exit(1);
  }

  if (appInit === 'init') {
    init(projectName, srcDir, publishDir);
  }
};
