import { doGet } from './events';

declare const global: {
  [key: string]: unknown;
};

global.doGet = doGet;
