import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withReduxSaga } from 'store';
import App from 'components/Common/App';
import { RecentPostList } from 'components/Home';

class HomeIndex extends Component {
  static propTypes = {
    last: PropTypes.string,
  };

  static defaultProps = {
    last: null,
  };

  static getInitialProps({ query }) {
    return { last: query.last };
  }

  render() {
    const { last } = this.props;

    return (
      <App>
        <RecentPostList last={ last } />
      </App>
    );
  }
}

export default withReduxSaga(HomeIndex);
