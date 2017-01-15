/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectCurrentUser = () => createSelector(
  selectHome(),
  (globalState) => globalState.get('currentUser')
);

const selectLoading = () => createSelector(
  selectHome(),
  (globalState) => globalState.get('loading')
);

const selectError = () => createSelector(
  selectHome(),
  (globalState) => globalState.get('error')
);

const selectRepos = () => createSelector(
  selectHome(),
  (globalState) => globalState.getIn(['userData', 'repositories'])
);

const selectUsername = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('username')
);

export {
  selectHome,
  selectUsername,
  selectCurrentUser,
  selectLoading,
  selectError,
  selectRepos,
};
