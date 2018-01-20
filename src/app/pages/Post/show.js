import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withReduxSaga } from 'store';
import App from 'components/Common/App';
import { PostView } from 'components/Post';

class PostShow extends Component {
  static propTypes = {
    postId: PropTypes.string.isRequired,
  };

  static getInitialProps({ query }) {
    return { postId: query.id };
  }

  render() {
    return (
      <App>
        <PostView postId={ this.props.postId } />
      </App>
    );
  }
}

export default withReduxSaga(PostShow);
