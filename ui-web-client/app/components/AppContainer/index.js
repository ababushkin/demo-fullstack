/**
*
* AppContainer
*
*/

import React from 'react'
import { Grid, Col, Row } from 'react-bootstrap'

function AppContainer(props) {
  return (
    <Grid>
      <Row>
        <Col>{React.Children.toArray(props.children)}</Col>
      </Row>
    </Grid>
  )
}

AppContainer.propTypes = {
  children: React.PropTypes.node,
}

export default AppContainer
