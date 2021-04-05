import { gaskunk } from '../../src/gaskunk';
import { MethodBuilder } from '../../src/method/builder';
interface User {
  id: number; // primary
  userName: string;
  age: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const db = gaskunk<User>({ client: 'Spreadsheet' });

describe('gaskunk - ', () => {
  test('can return instance of MethodBuilder', () => {
    expect(db('foo').select('id').build()).toBeInstanceOf([{ id: 1 }]);
  });
});
