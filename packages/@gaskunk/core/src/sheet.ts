import { CannotClearError } from '@gaskunk/error';
import type { ClearArgs, CreateArgs, SaveArgs } from '@gaskunk/types';

export const getSheet = (sheets: GoogleAppsScript.Spreadsheet.Spreadsheet) => {
  const create = (args: CreateArgs) => {
    const { tableName } = args;
    sheets.insertSheet(tableName);
    return `Created ${tableName}`;
  };

  const save = (args: SaveArgs) => {
    const { tableName, properties } = args;
    create({ tableName });

    /**
     * Get sub class properties
     */
    const values = properties.filter(
      (property) => !property.includes('sheets')
    );

    /**
     * Insert column name
     */
    const colunmNames = values.map((value) => value[0]);
    const target = sheets?.getSheetByName(tableName);
    target?.appendRow(colunmNames);

    /**
     * Insert initial values
     */
    const initialValues = values.map((value) => value[1]);
    target?.appendRow(initialValues);

    return [colunmNames, initialValues];
  };

  const clear = (args: ClearArgs) => {
    const { tableName } = args;
    const target = sheets?.getSheetByName(tableName);
    if (target) {
      sheets?.deleteSheet(target);
      return `Cleared ${tableName}`;
    }
    return new CannotClearError(tableName);
  };

  return {
    create: create,
    save: save,
    clear: clear,
  };
};
