interface Base {
  tableName: string;
}

/**
 * Sheet args
 */
export interface CreateArgs extends Base {}

export interface SaveArgs extends Base {
  properties: [string, any][];
}

export interface ClearArgs extends Base {}

/**
 * Data args
 */
export interface FindArgs extends Base {}

export interface FindByArgs extends Base {}

export interface RemoveArgs extends Base {}

export interface RemoveByArgs extends Base {}

export interface UpdateArgs extends Base {}

export interface HasIdArgs<T> extends Base {
  entity: T;
}

export interface GetIdArgs<T> extends Base {
  entity: T;
}

export interface MergeArgs extends Base {}

export interface InsertArgs extends Base {}

export interface CountArgs<T extends object = {}> extends Base {
  entity: { [key: string]: string | number | boolean | null | undefined | T };
}

export interface MethodsArgs extends Base {
  methods: string;
}
