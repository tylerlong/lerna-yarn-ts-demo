import uniq1 from '@my-org/pkg1';
import uniq2 from '@my-org/pkg2';

describe('uniq', () => {
  test('pkg1', async () => {
    expect(uniq1([1, 2, 1, 2, 3])).toEqual([1, 2, 3]);
  });
  test('pkg2', async () => {
    expect(uniq2([1, 2, 1, 2, 3])).toEqual([1, 2, 3]);
  });
});
