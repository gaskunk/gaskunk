/**
 * @see https://www.ykicchan.dev/posts/2020-07-12
 */
import { doGet } from './main';

declare const global: {
  [key: string]: unknown;
};

global.doGet = doGet;
