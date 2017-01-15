import expect from 'expect';
import usersPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('usersPageReducer', () => {
  it('returns the initial state', () => {
    expect(usersPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
