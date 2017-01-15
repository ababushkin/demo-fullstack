/*
 *
 * UsersPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectUsersPage from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export class UsersPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="UsersPage"
          meta={[
            { name: 'description', content: 'Description of UsersPage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

const mapStateToProps = selectUsersPage();

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
