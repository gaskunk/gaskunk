import { DataLogger } from './data-logger';
import { ConsoleLogger } from './console-logger';
import { SheetLogger } from './sheet-logger';

export class LoggerFactory {
  create(logger?: 'data' | 'sheet') {
    if (logger) {
      switch (logger) {
        case 'data':
          return new DataLogger();
        case 'sheet':
          return new SheetLogger();
      }
    }

    return new ConsoleLogger();
  }
}
