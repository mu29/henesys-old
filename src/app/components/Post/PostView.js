import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment/locale/ko';
import { Loading } from 'components/Bootstrap';
import { CommentForm } from 'components/Comment';
import { fetchPostActions, fetchPostActionTypes } from 'modules/Post';

class PostView extends Component {
  static propTypes = {
    loading: PropTypes.string.isRequired,
    post: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
    }),
    fetchPost: PropTypes.func.isRequired,
  };

  static defaultProps = {
    post: {},
  };

  componentWillMount() {
    this.props.fetchPost();
  }

  render() {
    const { loading, post } = this.props;
    return (
      <div className="post-view">
        <div className="post-title">
          <h3>{ post.title }</h3>
          <small>{ moment(post.createdAt).format('LLL') }, 뮤</small>
        </div>
        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        <Loading
          identifier={ fetchPostActionTypes.REQUEST }
          loading={ loading }
          visible={ Object.keys(post).length === 0 }
        />
        <div className="post-comment">
          <CommentForm />
        </div>
        <style jsx>{`
          .post-view {
            display: flex;
            flex-direction: column;
            border-radius: 0.25rem;
            background-color: white;
          }
          .post-view .post-title {
            padding: 1.5rem;
            background-color: #FAFAFA;
            border-bottom: 0.0625rem solid #EEEEEE;
            border-top-left-radius: 0.25rem;
            border-top-right-radius: 0.25rem;
          }
          .post-title h3 {
            margin: 0 0 0.25rem 0;
            color: black;
            font-size: 1.325rem;
            font-weight: 500;
          }
          .post-title small {
            font-size: 0.75rem;
            color: #9E9E9E;
          }
          .post-view .post-content {
            padding: 1.5rem;
          }
          .post-view .loading-indicator {
            padding-bottom: 3rem;
          }
          .post-view .post-comment {
            border-top: 0.0625rem solid #EEEEEE;
            padding: 1.5rem;
            background-color: #FAFAFA;
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = ({ Alert, Post }, { postId }) => ({
  loading: Alert.loading,
  post: Post.posts.find(p => p.id === postId),
});

const mapDispatchToProps = (dispatch, { postId }) => ({
  fetchPost: () => dispatch(fetchPostActions.request({ id: postId })),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostView);
