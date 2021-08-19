import type { GaskunkConfig } from './types';
import {
  SpreadsheetMethodBuilder,
  SpreadsheetSchemaBuilder,
} from '../dialects';

// extends builder & method for spreadsheet
export const resolveDialect = (config?: GaskunkConfig) => {
  if (config == null) {
    // default builders are prepared for spreadsheet
    return {
      MethodBuilder: SpreadsheetMethodBuilder,
      SchemaBuilder: SpreadsheetSchemaBuilder,
    };
  }

  switch (config.client) {
    case 'spreadsheet':
      return {
        MethodBuilder: SpreadsheetMethodBuilder,
        SchemaBuilder: SpreadsheetSchemaBuilder,
      };
    // TODO:
    // case 'drive':
    //   return builders;
    default:
      return {
        MethodBuilder: SpreadsheetMethodBuilder,
        SchemaBuilder: SpreadsheetSchemaBuilder,
      };
  }
};
