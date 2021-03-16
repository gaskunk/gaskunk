import type {
  RemoveArgs,
  RemoveByArgs,
  FindArgs,
  FindByArgs,
  UpdateArgs,
  HasIdArgs,
  GetIdArgs,
  MergeArgs,
  InsertArgs,
  CountArgs,
  MethodsArgs,
} from '@gaskunk/types';
import { CannotDeleteAllError } from '@gaskunk/error';
import { DataLogger } from '@gaskunk/logger';
import { transpile } from 'typescript';

export const getData = (sheets: GoogleAppsScript.Spreadsheet.Spreadsheet) => {
  const logger = new DataLogger();

  const find = (args: FindArgs) => {
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

  const remove = (args: RemoveArgs) => {
    const { tableName } = args;
    const target = sheets.getSheetByName(tableName);
    const result = target?.clearContents();
    if (result) return logger.logGet(tableName, 'remove');
    return new CannotDeleteAllError(tableName);
  };

  const removeBy = (_args: RemoveByArgs) => {};

  const update = (_args: UpdateArgs) => {};

  const hasId = (_args: HasIdArgs) => {};

  const getId = (_args: GetIdArgs) => {};

  const merge = (_args: MergeArgs) => {};

  const insert = (_args: InsertArgs) => {};

  const count = (_args: CountArgs) => {};

  const methods = (args: MethodsArgs) => {
    const { methods } = args;
    const code = transpile(`sheets?.${methods}`);
    const result = eval(code);
    return result;
  };

  return {
    find: find,
    findBy: findBy,
    remove: remove,
    removeBy: removeBy,
    update: update,
    hasId: hasId,
    getId: getId,
    merge: merge,
    insert: insert,
    count: count,
    methods: methods,
  };
};
