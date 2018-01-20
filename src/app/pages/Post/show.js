import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'routes';
import { withReduxSaga } from 'store';
import App from 'components/Common/App';
import { IconButton } from 'components/Bootstrap';
import { PostView, TagList } from 'components/Post';

class PostShow extends Component {
  static propTypes = {
    tag: PropTypes.string.isRequired,
    postId: PropTypes.string.isRequired,
  };

  static getInitialProps({ query }) {
    return { postId: query.id, tag: query.tag };
  }

  render() {
    const { tag } = this.props;

    return (
      <App>
        <PostView postId={ this.props.postId } />
        <TagList tag={ tag } />
        <IconButton
          className="post-button"
          icon="plus"
          color="black"
          style={{ height: 48 }}
          onClick={ () => Router.pushRoute(`/posts/new?tag=${tag}`) }
          block
        >
          작성하기
        </IconButton>
        <style jsx>{`
          .post-button {
            margin-top: 1rem;
            font-size: 0.875rem;
          }
        `}</style>
      </App>
    );
  }
}

export default withReduxSaga(PostShow);
