import React, { Component } from 'react';
import { withReduxSaga } from 'store';
import { readMenus } from 'firebase/MenuApi';
import { fetchMenuActions } from 'modules/Menu';
import App from 'components/common/App';

class Home extends Component {
  static async getInitialProps({ store }) {
    const { menus } = await readMenus();
    store.dispatch(fetchMenuActions.success({ menus }));
    return { menus };
  }

  render () {
    return (
      <App menus={ this.props.menus }>
      </App>
    )
  }
}

export default withReduxSaga(Home);
