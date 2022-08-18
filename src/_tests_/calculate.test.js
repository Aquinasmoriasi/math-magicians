import calculate from '../logic/calculate';

describe('The function', () => {
  test('resets the input results', () => {
    expect(calculate({ total: '6', next: null, operation: '+' }, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
  test('adds two iputs', () => {
    expect(calculate({ total: '8', next: '5', operation: '+' }, '=')).toEqual({
      total: '13',
      next: null,
      operation: null,
    });
  });
});
