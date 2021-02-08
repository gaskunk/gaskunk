import { Entity } from '../src/entity';

jest.mock('../src/entity');
const EntityMock = Entity as jest.Mock;

beforeAll(() => {
  EntityMock.mockImplementationOnce(() => {
    return {
      create: () => {},
      clear: () => {},
      save: () => {
        return [
          ['id', 0],
          ['name', 'gaskunk'],
          ['description', '🦨'],
        ];
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
    expect(skunk.save()).toMatchObject([
      ['id', 0],
      ['name', 'gaskunk'],
      ['description', '🦨'],
    ]);
  });
});
