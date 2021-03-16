import { Logger } from './logger';

export class SheetLogger implements Logger {
  log() {}

  logGet(tableName: string, methodName: string) {
    switch (methodName) {
      case 'create':
        return `Created ${tableName}`;
      case 'clear':
        return `Cleared ${tableName}`;
    }
  }
}
