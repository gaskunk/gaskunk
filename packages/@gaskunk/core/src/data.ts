import type {
  DeleteAllArgs,
  DeleteByArgs,
  FindAllArgs,
  FindByArgs,
  UpdateArgs,
} from '@gaskunk/types';
import { CannotDeleteAllError } from '@gaskunk/error';
import { LoggerFactory } from '@gaskunk/logger';
import { ConsoleLogger } from '@gaskunk/logger/lib/console-logger';
import { SheetLogger } from '@gaskunk/logger/lib/sheet-logger';

export const getData = (sheets: GoogleAppsScript.Spreadsheet.Spreadsheet) => {
  const logger = new LoggerFactory().create('data');
  if (logger instanceof ConsoleLogger || logger instanceof SheetLogger) return;

  const find = (args: FindAllArgs) => {
    const { tableName } = args;
    const target = sheets?.getSheetByName(tableName);
    const range = target?.getDataRange();
    const SpreadsheetValues = range?.getValues();

    /**
     * Get first row values as column names
     */
    const columnNames = SpreadsheetValues?.reduce((prev, cur, index) => {
      if (index == 0) return cur;
      return prev;
    }, []);

    // TODO: get values excludes column names
    const values = SpreadsheetValues?.filter((value) => value !== columnNames);

    if (values) {
      return [columnNames, ...values];
    }

    return [columnNames, []];
  };

  const findBy = (_args: FindByArgs) => {};

  const remove = (args: DeleteAllArgs) => {
    const { tableName } = args;
    const target = sheets.getSheetByName(tableName);
    const result = target?.clearContents();
    if (result) return logger.logGet(tableName, 'remove');
    return new CannotDeleteAllError(tableName);
  };

  const removeBy = (_args: DeleteByArgs) => {};

  const update = (_args: UpdateArgs) => {};

  return {
    find: find,
    findBy: findBy,
    remove: remove,
    removeBy: removeBy,
    update: update,
  };
};
