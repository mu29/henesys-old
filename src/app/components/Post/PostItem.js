import React from 'react';
import moment from 'moment';
import 'moment/locale/ko';

export default (props) => (
  <a href={ `/posts/${props.post.id}` } className="post-item">
    <div className="content">
      <h4>{ props.post.title }</h4>
      <div>
        <small>{ moment(props.post.created_at).fromNow() }, 뮤</small>
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
  </a>
);
