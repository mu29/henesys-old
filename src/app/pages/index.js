import React, { Component } from 'react';
import { withReduxSaga } from '../store';
import App from '../components/common/App';

class Home extends Component {
  static async getInitialProps () {
    return {};
  }

  render () {
    return (
      <App>
        <p>Index Page</p>
      </App>
    )
  }
}

export default withReduxSaga(Home);
