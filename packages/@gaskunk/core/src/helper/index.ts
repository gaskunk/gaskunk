import type { Entity } from '../entity/entity';

export const normalizeArray = () => {};

/**
 * @deprecated
 */
export const existsEntityEvery = (table: any[], entity: any[]) => {
  if (table.length >= entity.length) {
    return table.every((value, index) => value === entity[index]);
  } else {
    return false;
  }
};

/**
 * @deprecated
 */
export const existsEntitySome = (
  allTableValues: any[],
  entityValues: any[]
) => {
  if (allTableValues.length >= entityValues.length) {
    return entityValues.some((entityValue) => {
      return allTableValues.includes(entityValue);
    });
  } else {
    return false;
  }
};

/**
 * @deprecated
 */
export const getEntityProperties = (entity: Entity) => {
  const properties = Object.entries(entity).filter(
    (value) => !value.includes('sheets')
  );
  return properties.map((property) => property[1]);
};

/**
 * @deprecated
 */
export const getColumnNames = (values?: any[][]) => {
  return values?.reduce((prev, cur, index) => {
    if (index === 0) return cur;
    return prev;
  }, []);
};

/**
 * @deprecated
 */
export const findValuesWithEntity = (values?: any[][], entity?: any[]) => {
  return (
    entity &&
    values?.reduce((prev, cur) => {
      if (existsEntityEvery(cur, entity)) return cur;
      return prev;
    }, [])
  );
};

/**
 * @deprecated
 */
export const getAllSheetValues = (
  tableName: string,
  sheets?: GoogleAppsScript.Spreadsheet.Spreadsheet
) => {
  return sheets?.getSheetByName(tableName)?.getDataRange().getValues();
};

/**
 * @deprecated
 */
export const getAllTableValues = (
  allSheetValues: any[][],
  columnNames: any[]
) => {
  return allSheetValues?.filter(
    (allSheetValue) => allSheetValue !== columnNames
  );
};
