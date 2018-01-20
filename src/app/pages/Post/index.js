import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'routes';
import { withReduxSaga } from 'store';
import App from 'components/Common/App';
import { IconButton } from 'components/Bootstrap';
import { PostList, TagList } from 'components/Post';

class PostIndex extends Component {
  static propTypes = {
    tag: PropTypes.string.isRequired,
    last: PropTypes.string,
  };

  static defaultProps = {
    last: null,
  };

  static getInitialProps({ query }) {
    return { tag: query.tag, last: query.last };
  }

  render() {
    const { tag, last } = this.props;

    return (
      <App>
        <PostList tag={ tag } last={ last } />
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

export default withReduxSaga(PostIndex);
