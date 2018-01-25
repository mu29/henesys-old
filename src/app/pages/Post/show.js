import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'routes';
import { withReduxSaga } from 'store';
import App from 'components/Common/App';
import { IconButton } from 'components/Bootstrap';
import { PostView, TagList } from 'components/Post';
import { fetchPostActions } from 'modules/Post';
import { readPost } from 'firebase/PostApi';

class PostShow extends Component {
  static propTypes = {
    tag: PropTypes.string.isRequired,
    post: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
    }).isRequired,
    postId: PropTypes.string.isRequired,
  };

  static async getInitialProps({ store, query }) {
    const { post } = await readPost(query.id);
    store.dispatch(fetchPostActions.success({ post }));

    return { post, postId: query.id, tag: query.tag };
  }

  render() {
    const { post, postId, tag } = this.props;

    return (
      <App>
        <PostView post={ post } postId={ postId } />
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
