import type { GaskunkConfig } from './types';
import { SpreadsheetMethodBuilder } from '../dialects/spreadsheet';

// extends builder & method for spreadsheet
export const resolveDialect = (config: GaskunkConfig) => {
  switch (config.client) {
    case 'spreadsheet':
      return { MethodBuilder: SpreadsheetMethodBuilder };
    default:
      return { MethodBuilder: null };
  }
};
