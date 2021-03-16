export interface Logger<T extends object | string = {}> {
  log(level: 'log' | 'info' | 'warn', message: T): any;
}

export type LoggerOptions =
  | boolean
  | 'data'
  | 'sheet'
  | 'warn'
  | 'info'
  | 'log';
