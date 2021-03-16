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
import { Entity } from './entity';

export const getData = (sheets: GoogleAppsScript.Spreadsheet.Spreadsheet) => {
  const logger = new DataLogger();

  const find = (args: FindArgs) => {
    const { tableName } = args;
    const target = sheets?.getSheetByName(tableName);
    const range = target?.getDataRange();
    const spreadsheetValues = range?.getValues();

    /**
     * Get first row values as column names
     */
    const columnNames = spreadsheetValues?.reduce((prev, cur, index) => {
      if (index == 0) return cur;
      return prev;
    }, []);

    // TODO: get values excludes column names
    const values = spreadsheetValues?.filter((value) => value !== columnNames);

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

  const hasId = (args: HasIdArgs<Entity>) => {
    const { tableName, entity } = args;
    const target = sheets.getSheetByName(tableName);
    const range = target?.getDataRange();
    const spreadsheetValues = range?.getValues();

    /**
     * Array of entity properties
     */
    const properties = Object.entries(entity).filter(
      (value) => !value.includes('sheets')
    );
    const entityValues = properties.map((property) => property[1]);

    /**
     * Compare row values of Spreadsheet, entity values
     */
    const hasContravariance = (superArray: any[], subArray: any[]) => {
      return (
        superArray.length >= subArray.length &&
        superArray.every((elem, index) => elem === subArray[index])
      );
    };

    const foundValues = spreadsheetValues?.filter((value) =>
      hasContravariance(value, entityValues)
    );

    if (!foundValues) return false;

    /**
     * foundValues[0]: primaryColumn value
     */
    if (foundValues[0] != null) return true;
    else return false;
  };

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
