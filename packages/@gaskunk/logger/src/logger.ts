export interface Logger {
  log(level: 'log' | 'info' | 'warn', message: any): any;

  logGet(tableName: string, methodName: string): any;
}
