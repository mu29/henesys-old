import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withReduxSaga } from 'store';
import App from 'components/Common/App';
import { CreatePostButton, PostList, TagList } from 'components/Post';

class PostIndex extends Component {
  static propTypes = {
    tag: PropTypes.string.isRequired,
    last: PropTypes.string,
  };

  static defaultProps = {
    last: null,
  };

  static getInitialProps({ req }) {
    return { tag: req.query.tag, last: req.query.last };
  }

  render() {
    const { tag, last } = this.props;
    return (
      <App>
        <div className="post-index">
          <PostList tag={ tag } last={ last } />
          <div className="side">
            <TagList tag={ tag } />
            <CreatePostButton tag={ tag } />
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
        `}</style>
      </App>
    );
  }
}

export default withReduxSaga(PostIndex);
