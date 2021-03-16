import { MethodName } from './logger';

export class SheetLogger {
  logGet(tableName: string, methodName: MethodName) {
    switch (methodName) {
      case 'create':
        return `Created ${tableName}`;
      case 'clear':
        return `Cleared ${tableName}`;
    }
  }
}
