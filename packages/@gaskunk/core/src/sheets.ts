import { entityContainerFactory } from './factory';
import type {
  ClearArgs,
  CreateArgs,
  DeleteAllArgs,
  DeleteByArgs,
  FindAllArgs,
  FindByArgs,
  OrderArgs,
  SaveArgs,
  UpdateArgs,
} from '@gaskunk/types';
import { CannotClearError, CannotDeleteAllError } from '@gaskunk/error';

export const getTable = (sheets: GoogleAppsScript.Spreadsheet.Spreadsheet) => {
  const create = (args: CreateArgs) => {
    const { tableName } = args;
    sheets.insertSheet(tableName);
    return `Created ${tableName}`;
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
    clear: clear,
  };
};

export const getSheets = (sheets: GoogleAppsScript.Spreadsheet.Spreadsheet) => {
  const container = entityContainerFactory(sheets);
  const { table } = container;

  const save = (args: SaveArgs) => {
    const { tableName, properties } = args;
    /**
     * Insert new sheet as table
     */
    table?.create(tableName);

    /**
     * FIXME: Get sub class properties
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

  const destroy = (args: DeleteAllArgs) => {
    const { tableName } = args;
    const target = sheets.getSheetByName(tableName);
    const result = target?.clearContents();
    if (result) return `Deleted ${tableName} data`;
    return new CannotDeleteAllError(tableName);
  };

  const deleteBy = (_args: DeleteByArgs) => {};

  const order = (_args: OrderArgs) => {};

  const update = (_args: UpdateArgs) => {};

  return {
    save: save,
    find: find,
    findBy: findBy,
    destroy: destroy,
    deleteBy: deleteBy,
    order: order,
    update: update,
  };
};
