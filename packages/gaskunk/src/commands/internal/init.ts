import { guide, output } from '../../messages';
import path from 'path';
import { promises as fsPromises } from 'fs';
import execa from 'execa';
import { getClaspCmd, getInstallCmd } from '../../helpers';

const createDirs = async (
  projectRoot: string,
  srcDir: string,
  publishDir: string
) => {
  await fsPromises.mkdir(projectRoot, { recursive: true });

  await fsPromises.mkdir(path.join(projectRoot, srcDir), { recursive: true });
  await fsPromises.mkdir(path.join(projectRoot, publishDir), {
    recursive: true,
  });
};

const createClaspApp = async (
  projectRoot: string,
  publishDir: string,
  projectName: string
) => {
  output.info(`create ${projectName} with gaskunk...`, '🏠');
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

  output.success(`created ${projectName}`);
};

const installDeps = () => {};

const createTemplateFiles = () => {};

export const init = async (
  projectName: string,
  srcDir: string,
  publishDir: string
) => {
  const projectRoot = path.resolve(projectName);
  const installCmd = getInstallCmd();

  await createDirs(projectRoot, srcDir, publishDir);

  await createClaspApp(projectRoot, publishDir, projectName);

  guide(installCmd, projectName);
};
