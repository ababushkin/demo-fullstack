/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import Helmet from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import AtPrefix from './AtPrefix'
import CenteredSection from './CenteredSection'
import Form from './Form'
import H2 from 'components/H2'
import Input from './Input'
import List from 'components/List'
import ListItem from 'components/ListItem'
import LoadingIndicator from 'components/LoadingIndicator'
import RepoListItem from 'containers/RepoListItem'
import TransactionsList from 'components/TransactionsList'
import InvoicesList from 'components/InvoicesList'
import Section from './Section'
import { Button } from 'react-bootstrap'
import messages from './messages'
import { loadRepos, changeUsername } from './actions'
import { selectRepos, selectLoading, selectError, selectUsername } from './selectors'

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm()
    }
  }

  render() {
    let repositoriesList = null

    // Show a loading indicator when we're loading
    if (this.props.loading) {
      repositoriesList = (<List component={LoadingIndicator} />)

    // Show an error if there is one
    } else if (this.props.error !== false) {
      const ErrorComponent = () => (
        <ListItem item={'Something went wrong, please try again!'} />
      );
      repositoriesList = (<List component={ErrorComponent} />)

    // If we're not loading, don't have an error and there are repos, show the repos
    } else if (this.props.repos !== false) {
      repositoriesList = (<List items={this.props.repos} component={RepoListItem} />)
    }

    // TODO: Move to backend fetch through a saga, this is here to get the UI scaffolding up and running
    const invoices = [
      {
        invoice_number: 1111,
        due_date: '30/01/2017',
        issued_date: '01/01/2017',
        issued_to: 'John Smith',
        issued_by: 'You',
        amount: 1000,
        status: 0,
      },
      {
        invoice_number: 1110,
        due_date: '30/01/2017',
        issued_date: '01/01/2017',
        issued_to: 'You',
        issued_by: 'John Smith',
        amount: 500,
        status: 0,
      },
    ]

    // TODO: Move to backend fetch through a saga, this is here to get the UI scaffolding up and running
    const transactions = [
      {
        date: '02/01/2017',
        description: 'Payment from John Smith',
        credit: 1000,
        debit: null,
      },
      {
        date: '01/01/2017',
        description: 'Payment to Tom Jones',
        credit: null,
        debit: 500,
      }
    ]

    return (
      <article>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application homepage' },
          ]}
        />
        <div>
          {/*<Section>*/}
            {/*<Form onSubmit={this.props.onSubmitForm}>*/}
              {/*<label htmlFor="username">*/}
                {/*<FormattedMessage {...messages.trymeMessage} />*/}
                {/*<AtPrefix>*/}
                  {/*<FormattedMessage {...messages.trymeAtPrefix} />*/}
                {/*</AtPrefix>*/}
                {/*<Input*/}
                  {/*id="username"*/}
                  {/*type="text"*/}
                  {/*placeholder="mxstbr"*/}
                  {/*value={this.props.username}*/}
                  {/*onChange={this.props.onChangeUsername}*/}
                {/*/>*/}
              {/*</label>*/}
            {/*</Form>*/}
            {/*{repositoriesList}*/}
          {/*</Section>*/}
          <Section>
            <H2>
              <FormattedMessage {...messages.invoicesHeading} />
            </H2>
            <Button>Issue new invoice</Button>
            <InvoicesList items={invoices} />
          </Section>
          <Section>
            <TransactionsList items={transactions} />
          </Section>
        </div>
      </article>
    )
  }
}

HomePage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  repos: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: selectRepos(),
  username: selectUsername(),
  loading: selectLoading(),
  error: selectError(),
})

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
