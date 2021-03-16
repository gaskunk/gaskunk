interface Base {
  tableName: string;
}

export interface CreateArgs extends Base {}

export interface ClearArgs extends Base {}

export interface SaveArgs extends Base {
  properties: [string, any][];
}

export interface FindAllArgs extends Base {}

export interface FindByArgs extends Base {}

export interface DeleteAllArgs extends Base {}

export interface DeleteByArgs extends Base {}

export interface OrderArgs extends Base {}

export interface UpdateArgs extends Base {}
