import React, { Component } from 'react';
import { withReduxSaga } from 'store';
import App from 'components/Common/App';
import { PostList, TagList } from 'components/Post';

class PostIndex extends Component {
  render() {
    return (
      <App>
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12 post-index">
            <PostList />
            <TagList />
          </div>
        </div>
        <style jsx>{`
          .post-index {
            display: flex;
            justify-content: space-between;
            margin-top: 1.5rem;
          }
        `}</style>
      </App>
    );
  }
}

export default withReduxSaga(PostIndex);
