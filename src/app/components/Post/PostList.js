import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { difference } from 'lodash';
import { fetchPostListActions } from 'modules/Post';
import { findMenu } from 'utils';
import PostItem from './PostItem';

class PostList extends Component {
  static propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    last: PropTypes.string,
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetchPostList: PropTypes.func.isRequired,
  }

  static defaultProps = {
    last: null,
  };

  componentWillMount() {
    const { tags, last, fetchPostList } = this.props;
    tags.forEach(tag => fetchPostList(tag, last));
  }

  componentWillReceiveProps({ tags: nextTags, last: nextLast }) {
    const { tags, last, fetchPostList } = this.props;
    if (difference(tags, nextTags).length > 0 || last !== nextLast) {
      nextTags.forEach(tag => fetchPostList(tag, nextLast));
    }
  }

  render() {
    const { posts } = this.props;
    return (
      <div className="post-list">
        { posts.map(post => <PostItem key={ post.id } post={ post } />) }
        <style jsx>{`
          .post-list {
            border-radius: 0.25rem;
            background-color: white;
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = ({ Post }, { tag }) => {
  const menu = findMenu(tag);
  if (menu.enable) {
    return {
      posts: Post.posts.filter(p => p.tag === tag),
      tags: [menu.id],
    };
  }

  return {
    posts: Post.posts.filter(p => menu.tags.find(t => t.id === p.tag)),
    tags: menu.tags.map(t => t.id),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPostList: (tag, last) => dispatch(fetchPostListActions.request({ tag, last })),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
