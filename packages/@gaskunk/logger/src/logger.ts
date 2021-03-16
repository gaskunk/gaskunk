export interface LoggerInterface<T extends string = ''> {
  log(level: 'log' | 'info' | 'warn', message: T): any;
}
