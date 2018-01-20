import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPostActions } from 'modules/Post';

class PostView extends Component {
  static propTypes = {
    postId: PropTypes.string.isRequired,
    post: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
    }).isRequired,
    fetchPost: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.fetchPost();
  }

  render() {
    return (
      <div className="post-view">
        { this.props.post && this.props.post.content }
        <style jsx>{`
          .post-view {
            
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = ({ Post }, { postId }) => ({
  post: Post.posts.find(p => p.id === postId),
});

const mapDispatchToProps = (dispatch, { postId }) => ({
  fetchPost: () => dispatch(fetchPostActions.request({ id: postId })),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostView);
