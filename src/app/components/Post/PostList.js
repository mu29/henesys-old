import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostListActions } from 'modules/Post';
import PostItem from './PostItem';

class PostList extends Component {
  componentDidMount() {
    const { tag, last, fetchPostList } = this.props;
    fetchPostList(tag, last);
  }

  render() {
    const { posts } = this.props;
    return (
      <div className="post-list">
        { posts.map(post => <PostItem post={ post } />) }
        <style jsx>{`
          .post-list {
            flex: 3;
            height: 50vh;
            margin-right: 1.5rem;
            border-radius: 0.25rem;
            background-color: white;
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = ({ Post }) => ({
  posts: Post.posts,
});

const mapDispatchToProps = dispatch => ({
  fetchPostList: (tag, last) => dispatch(fetchPostListActions.request({ tag, last })),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
