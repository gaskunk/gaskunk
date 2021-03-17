import type { Entity } from './entity/entity';

export const existsEntityInTable = (table: any[], entity: any[]) => {
  return (
    table.length >= entity.length &&
    table.every((value, index) => value === entity[index])
  );
};

export const getEntityProperties = (entity: Entity) => {
  const properties = Object.entries(entity).filter(
    (value) => !value.includes('sheets')
  );
  return properties.map((property) => property[1]);
};

export const getColumnNames = (values?: any[][]) => {
  return values?.reduce((prev, cur, index) => {
    if (index === 0) return cur;
    return prev;
  }, []);
};

export const findValuesWithEntity = (values?: any[][], entity?: any[]) => {
  return (
    entity &&
    values?.reduce((prev, cur) => {
      if (existsEntityInTable(cur, entity)) return cur;
      return prev;
    }, [])
  );
};

export const getAllSheetValues = (
  tableName: string,
  sheets?: GoogleAppsScript.Spreadsheet.Spreadsheet
) => {
  return sheets?.getSheetByName(tableName)?.getDataRange().getValues();
};
