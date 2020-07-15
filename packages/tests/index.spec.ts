import uniq1 from '@tylerlong/test-pkg1';
import uniq2 from '@tylerlong/test-pkg2';

describe('uniq', () => {
  test('test-pkg1', async () => {
    expect(uniq1([1, 2, 1, 2, 3])).toEqual([1, 2, 3]);
  });
  test('test-pkg2', async () => {
    expect(uniq2([1, 2, 1, 2, 3])).toEqual([1, 2, 3]);
  });
});
