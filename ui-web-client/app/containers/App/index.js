/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';

import AppContainer from 'components/AppContainer'
import Header from 'components/Header'
import Footer from 'components/Footer'

function App(props) {
  return (
    <AppContainer>
      <Helmet
        titleTemplate="%s - Demo"
        defaultTitle="Demo"
        meta={[
          { name: 'description', content: 'Demo of a full stack app, using React, RoR, Docker and AWS' },
        ]}
        link={[
          { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css' },
          { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css' },
        ]}
      />
      <Header />
      {React.Children.toArray(props.children)}
      <Footer />
    </AppContainer>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
