import React, { Component } from 'react';
import { withReduxSaga } from 'store';
import { readMenus } from 'firebase/MenuApi';
import { fetchMenuActions } from 'modules/Menu';
import App from 'components/common/App';

class Home extends Component {
  render () {
    return (
      <App>
      </App>
    )
  }
}

export default withReduxSaga(Home);
