import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withReduxSaga } from 'store';
import App from 'components/Common/App';
import { PostForm } from 'components/Post';

class PostNew extends Component {
  static propTypes = {
    tag: PropTypes.string.isRequired,
  };

  static getInitialProps({ query }) {
    return { tag: query.tag };
  }

  render() {
    return (
      <App noSideBar>
        <PostForm tag={ this.props.tag } />
      </App>
    );
  }
}

export default withReduxSaga(PostNew);
