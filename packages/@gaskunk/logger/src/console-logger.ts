import { Logger } from './logger';

export class ConsoleLogger implements Logger {
  log(
    level: Parameters<Logger['log']>[0],
    message: Parameters<Logger['log']>[1]
  ) {
    switch (level) {
      case 'log':
        console.log('[LOG]: ' + message);
        break;
      case 'info':
        console.log('[INFO]: ' + message);
      case 'warn':
        console.warn('[WARN]: ' + message);
    }
  }
}
