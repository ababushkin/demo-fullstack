import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router'

import messages from './messages'

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Nav justified>
          <li>
            <Link to="/"><FormattedMessage {...messages.home} /></Link>
          </li>
          <li>
            <Link to="/users"><FormattedMessage {...messages.users} /></Link>
          </li>
        </Nav>
      </div>
    );
  }
}

export default Header
