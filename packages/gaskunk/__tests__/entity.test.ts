import { Entity } from '../src/entity';

jest.mock('../src/entity');
const EntityMock = Entity as jest.Mock;

const SHEETS_TABLE_INIT = [
  ['id', 0],
  ['name', 'gaskunk'],
  ['description', '🦨'],
];

beforeAll(() => {
  EntityMock.mockImplementationOnce(() => {
    return {
      create: () => {},
      clear: () => {},
      save: () => {
        return SHEETS_TABLE_INIT;
      },
      find: () => {},
      findBy: () => {},
      delete: () => {},
      deleteBy: () => {},
      order: () => {},
      update: () => {},
    };
  });
});

describe('Entity', () => {
  it('create', () => {
    class Skunk extends Entity {
      id!: number;
      name!: string;
      description!: string;
    }
    const skunk = new Skunk();
    skunk.id = 0;
    skunk.name = 'gaskunk';
    skunk.description = '🦨';
    expect(EntityMock).toHaveBeenCalled();
    expect(skunk.save()).toMatchObject(SHEETS_TABLE_INIT);
  });
});
