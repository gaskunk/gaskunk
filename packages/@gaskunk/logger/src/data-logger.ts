import { MethodName } from './logger';

export class DataLogger {
  logGet(tableName: string, methodName: MethodName) {
    switch (methodName) {
      case 'remove':
        return `Removed ${tableName} values`;
    }
  }
}
