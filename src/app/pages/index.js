import React, { Component } from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { withReduxSaga } from '../store';
import App from '../components/common/App';

class Home extends Component {
  static async getInitialProps () {
    const db = firebase.firestore();
    const menus = await db.collection('menus').get();
    return { menus };
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