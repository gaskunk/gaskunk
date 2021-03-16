import { DataLogger } from './data-logger';
import { HighLightConsoleLogger } from './highlight-console-logger';
import { SheetLogger } from './sheet-logger';

export class LoggerFactory {
  create(logger?: 'data' | 'sheet', options?: any) {
    if (logger) {
      switch (logger) {
        case 'data':
          return new DataLogger(options);
        case 'sheet':
          return new SheetLogger(options);
      }
    }

    return new HighLightConsoleLogger(options);
  }
}
