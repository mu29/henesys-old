import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Loading } from 'components/Bootstrap';
import { fetchPostListActions, fetchPostListActionTypes } from 'modules/Post';
import PostItem from 'components/Post/PostItem';

class RecentPostList extends Component {
  static propTypes = {
    last: PropTypes.string,
    loading: PropTypes.string.isRequired,
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetchPostList: PropTypes.func.isRequired,
  }

  static defaultProps = {
    last: null,
  };

  componentWillMount() {
    const { last, fetchPostList } = this.props;
    fetchPostList(last);
  }

  componentWillReceiveProps({ last: nextLast }) {
    const { last, fetchPostList } = this.props;
    if (last !== nextLast) {
      fetchPostList(nextLast);
    }
  }

  render() {
    const { posts, loading } = this.props;
    return (
      <div className="recent-post-list">
        { posts.map(post => <PostItem key={ post.id } post={ post } />) }
        <Loading
          identifier={ fetchPostListActionTypes.REQUEST }
          loading={ loading }
          visible={ posts.length === 0 }
        />
        <style jsx>{`
          .recent-post-list {
            display: flex;
            flex-direction: column;
            min-height: 50vh;
            border-radius: 0.25rem;
            background-color: white;
          }
          .recent-post-list .loading-indicator {
            padding: 2rem;
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = ({ Alert, Post }) => ({
  loading: Alert.loading,
  posts: Post.posts,
});

const mapDispatchToProps = dispatch => ({
  fetchPostList: last => dispatch(fetchPostListActions.request({ last })),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecentPostList);
