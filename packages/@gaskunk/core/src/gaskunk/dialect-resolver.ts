import type { GaskunkConfig } from './types';
import {
  SpreadsheetMethodBuilder,
  SpreadsheetSchemaBuilder,
} from '../dialects';

type Builders = {
  MethodBuilder: typeof SpreadsheetMethodBuilder | null;
  SchemaBuilder: typeof SpreadsheetSchemaBuilder | null;
};

// extends builder & method for spreadsheet
export const resolveDialect = (config: GaskunkConfig) => {
  const builders: Builders = {
    MethodBuilder: null,
    SchemaBuilder: null,
  };
  switch (config.client) {
    case 'spreadsheet':
      builders.MethodBuilder = SpreadsheetMethodBuilder;
      builders.SchemaBuilder = SpreadsheetSchemaBuilder;
      return builders;
    // TODO:
    // case 'drive':
    //   return builders;
    default:
      return builders;
  }
};
