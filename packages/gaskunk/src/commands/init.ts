import { info, error, success } from '../messages';
import path from 'path';
import { promises as fsPromises } from 'fs';
import execa from 'execa';
import { getClaspCmd } from '../helpers';

const createDirs = async (
  projectRoot: string,
  srcDir: string,
  publishDir: string
) => {
  await fsPromises.mkdir(projectRoot);

  await fsPromises.mkdir(path.join(projectRoot, srcDir));
  await fsPromises.mkdir(path.join(projectRoot, publishDir));
};

const createClaspApp = async (projectRoot: string, publishDir: string) => {
  info('create project by clasp...', '🏠');
  process.chdir(projectRoot);

  await execa(getClaspCmd(), ['create', '--type', 'sheet']);

  const appsScriptJson = await fsPromises.readFile(
    path.join(projectRoot, 'appsscript.json')
  );
  await fsPromises.writeFile(
    path.join(projectRoot, `${publishDir}/appsscript.json`),
    appsScriptJson
  );
  await fsPromises.unlink(path.join(projectRoot, 'appsscript.json'));

  const claspJsonFile = await fsPromises.readFile(
    path.join(projectRoot, '.clasp.json')
  );
  const claspJson = JSON.parse(claspJsonFile.toString());
  const newClaspJson = {
    ...claspJson,
    rootDir: `./${publishDir}`,
  };
  await fsPromises.writeFile(
    path.join(projectRoot, '.clasp.json'),
    JSON.stringify(newClaspJson)
  );

  success('created project by clasp');
};

const installDeps = () => {};

const createTemplateFiles = () => {};

export const init = async (
  projectName: string,
  srcDir: string,
  publishDir: string
) => {
  const projectRoot = path.join(__dirname, projectName);
  await createDirs(projectRoot, srcDir, publishDir);

  await createClaspApp(projectRoot, publishDir);

  info('build command: webpack', '⚙️');
  info('deploy command: clasp push', '⚙️');
};
