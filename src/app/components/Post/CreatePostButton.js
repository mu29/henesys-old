import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CreatePostButton extends Component {
  static propTypes = {
    tag: PropTypes.string.isRequired,
  };

  render() {
    return (
      <a href={ `/posts/new?tag=${this.props.tag}` } className="create-post-button">
        <i className="fa fa-plus" />
        <p>작성하기</p>
        <style jsx>{`
          .create-post-button {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            margin-top: 1rem;
            padding: 1rem;
            border-radius: 0.125rem;
            border-left: 0.3rem solid #F9D14C;
            text-align: center;
            color: #E7E7E7;
            background-color: #2D2D2D;
          }
          .create-post-button:hover {
            color: white;
          }
          .create-post-button p {
            margin: 0;
            font-weight: 400;
          }
          .create-post-button .fa {
            margin-left: -1rem;
            margin-right: 0.5rem;
            font-size: 1rem;
          }
        `}</style>
      </a>
    );
  }
}
