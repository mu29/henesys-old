import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'routes';
import { withReduxSaga } from 'store';
import Menus from 'constants/Menu';
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
        <div className="post-index">
          <PostList tag={ tag } last={ last } />
          <div className="side">
            <TagList tag={ tag } />
            <IconButton
              className="post-button"
              icon="plus"
              color="black"
              style={{ height: 48 }}
              onClick={ () => Router.pushRoute(`/posts/new?tag=${tag}`) }
            >
              작성하기
            </IconButton>
          </div>
        </div>
        <style jsx>{`
          .post-index {
            display: flex;
            justify-content: space-between;
          }
          .post-index > .side {
            display: flex;
            flex-direction: column;
          }
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
