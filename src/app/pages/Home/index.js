import React, { Component } from 'react';
import { withReduxSaga } from 'store';
import App from 'components/Common/App';

class Home extends Component {
  render () {
    return (
      <App>
      </App>
    )
  }
}

export default withReduxSaga(Home);
