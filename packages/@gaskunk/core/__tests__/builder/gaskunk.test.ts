import { gaskunk } from '../../src/builder/gaskunk';
import { MethodBuilder } from '../../src/method/builder';

describe('gaskunk - ', () => {
  test('can return instance of MethodBuilder', () => {
    expect(gaskunk('foo')).toBeInstanceOf(MethodBuilder);
  });

  test('select', () => {
    expect(gaskunk('foo').select()).toBeInstanceOf(MethodBuilder);
  });
});
