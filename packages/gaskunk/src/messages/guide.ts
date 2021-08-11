import { info } from './output';
import chalk from 'chalk';
import { getInstallCmd } from '../helpers';

const cmd = (msg: string) => {
  return `${chalk.bold(msg)}`;
};

export const guide = (
  installCmd: ReturnType<typeof getInstallCmd>,
  projectName: string
) => {
  const useYarn = installCmd === 'yarn';
  const runCmd = useYarn ? 'yarn' : 'npm run';
  const install = `${installCmd} install`;
  const typeCheck = `${runCmd} typecheck`;
  const build = `${runCmd} build`;
  const deploy = `${runCmd} deploy`;
  const open = `${runCmd} open`;

  return info(
    `Development guide:
  All required dependencies are already installed by ${cmd(install)}

  First, run ${chalk.bold(`cd ${projectName}`)}

  To check type:
    ${cmd(typeCheck)}

  To build for production:
    ${cmd(build)}
  
  To deploy:
    ${cmd(deploy)}
  
  To open your app:
    ${cmd(open)}
  
  If you have questions, feedback, please check here or let us know:
    ${chalk.magenta('https://github.com/gaskunk/gaskunk/issues')}
`,
    '⚙️'
  );
};
