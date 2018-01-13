import React from 'react';

export default () => (
  <div className="create-post-button">
    <i className="fa fa-plus" />
    <a>작성하기</a>
    <style jsx>{`
      .create-post-button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 0.125rem;
        border-left: 0.5rem solid #F9D14C;
        text-align: center;
        color: #E7E7E7;
        background-color: #2D2D2D;
        cursor: pointer;
      }
      .create-post-button:hover {
        color: white;
      }
      .create-post-button a {
        color: inherit;
        font-weight: 400;
      }
      .create-post-button .fa {
        margin-left: -1rem;
        margin-right: 0.5rem;
        font-size: 1rem;
      }
    `}</style>
  </div>
);
