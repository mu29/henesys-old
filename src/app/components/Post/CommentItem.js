import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ko';

export default class CommentItem extends Component {
  static propTypes = {
    comment: PropTypes.shape({
      id: PropTypes.string,
      content: PropTypes.string,
      createdAt: PropTypes.date,
    }).isRequired,
  };

  render() {
    const { comment } = this.props;
    return (
      <div className="comment-item">
        <div className="info">
          { comment.user.name }
          <small>{ moment(comment.createdAt).fromNow() }</small>
        </div>
        <p className="content">
          { comment.content }
        </p>
        <style jsx>{`
          .comment-item {
            display: flex;
          }
          .comment-item .info {

          }
          .comment-item .content {
            padding: 1rem;
          }
        `}</style>
      </div>
    );
  }
}
