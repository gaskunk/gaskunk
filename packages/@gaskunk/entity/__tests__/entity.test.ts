import { Entity } from '../src/entity';

SpreadsheetApp['getActive'] = jest.fn(
  () => ({} as GoogleAppsScript.Spreadsheet.Spreadsheet)
);

const SHEETS_TABLE_INIT = [
  ['id', 0],
  ['name', 'gaskunk'],
  ['description', '🦨'],
];

describe('Entity', () => {
  it('save', () => {
    class Skunk extends Entity {
      id!: number;
      name!: string;
      description!: string;
    }
    const skunk = new Skunk();
    skunk.id = 0;
    skunk.name = 'gaskunk';
    skunk.description = '🦨';
    expect(skunk.save()).toMatchObject(SHEETS_TABLE_INIT);
  });
});
