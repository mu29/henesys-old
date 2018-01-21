import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TextArea, LoadingButton } from 'components/Bootstrap';
import { createCommentActions, createCommentActionTypes } from 'modules/Comment';

class CommentForm extends Component {
  static propTypes = {
    createComment: PropTypes.func.isRequired,
    loading: PropTypes.string.isRequired,
  };

  state = { content: '' }

  onChangeContent = ({ target }) => this.setState({ ...this.state, content: target.value })

  onSubmit = () => {
    const { createComment } = this.props;
    const { content } = this.state;

    if (content.length === 0) {
      return;
    }

    createComment(content);
  }

  render() {
    const { loading } = this.props;
    const { content } = this.state;

    return (
      <div className="comment-form">
        <TextArea
          wrapperClassName="comment-input"
          value={ content }
          onChange={ this.onChangeContent }
          placeholder="댓글 내용을 입력해주세요"
        />
        <LoadingButton
          className="comment-button"
          color="black"
          loadingColor="white"
          identifier={ createCommentActionTypes.REQUEST }
          loading={ loading }
          onClick={ this.onSubmit }
        >
          댓글 쓰기
        </LoadingButton>
        <style jsx>{`
          .comment-form {
            display: flex;
            border: 0.0625rem solid #EEEEEE;
            border-radius: 0.25rem;
          }
          .comment-form .comment-input {
            flex: 1;
          }
          .comment-form textarea {
            border: none;
            height: 5rem;
            padding: 0.75rem;
            border-top-left-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
          }
          .comment-form .comment-button {
            width: 5rem;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = ({ Alert }) => ({
  loading: Alert.loading,
});

const mapDispatchToProps = (dispatch, { postId }) => ({
  createPost: content => dispatch(createCommentActions.request({ postId, content })),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
