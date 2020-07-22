import Validator from '../Validator';

test('', () => {
  expect(Validator.validateUsername('querty')).toEqual('querty');
});
