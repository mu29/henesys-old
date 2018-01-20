import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ko';
import { Link } from 'components/Bootstrap';

export default class PostItem extends Component {
  static propTypes = {
    post: PropTypes.shape({
      id: PropTypes.string,
      tag: PropTypes.string,
      title: PropTypes.string,
      createdAt: PropTypes.date,
    }).isRequired,
  };

  render() {
    const { post } = this.props;
    return (
      <Link
        href={ `posts/${post.id}` }
        query={{ tag: post.tag }}
        className="post-item"
      >
        <div className="content">
          <h4>{ post.title }</h4>
          <div>
            <small>{ moment(post.createdAt).fromNow() }, 뮤</small>
          </div>
        </div>
        <div className="comment">
          <h4>12</h4>
          <small>댓글</small>
        </div>
        <style jsx>{`
          .post-item {
            display: flex;
            width: 100%;
            border-bottom: 0.0625rem solid #EEEEEE;
            cursor: pointer;
          }
          .post-item:hover {
            text-decoration: none;
          }
          .post-item .content {
            flex: 1;
            padding: 1rem;
          }
          .post-item .comment {
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: #FAFAFA;
            padding: 0.5rem 1rem;
            text-align: center;
          }
          .post-item .comment small {
            margin-top: 0.25rem;
          }
          .post-item h4 {
            margin: 0;
            font-size: 1rem;
            font-weight: 350;
            color: #424242;
          }
          .post-item small {
            font-size: 0.75rem;
            color: #2D2D2D;
            font-weight: 300;
          }
        `}</style>
      </Link>
    );
  }
}
