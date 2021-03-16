import { Logger, MethodName } from './logger';

export class DataLogger implements Logger {
  log() {}

  logGet(tableName: string, methodName: MethodName) {
    switch (methodName) {
      case 'remove':
        return `Removed ${tableName} values`;
      default:
        return `Unknown Error Occurred`;
    }
  }
}
