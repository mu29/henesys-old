import React from 'react';
import Menus from 'constants/Menu';

export default () => (
  <div className="header">
    <div className="row">
      <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12">
        <div className="content">
          <a href="/">
            <img src="/static/logo.png" />
          </a>
          <ul>
            {
              Menus.map(m => (
                <li key={ m.id }>
                  <a className="menu-item" href={ `/posts?tag=${m.id}` }>{ m.name }</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
    <style jsx>{`
      .header {
        width: 100%;
        height: 5rem;
        border-bottom: 0.25rem solid #F9D14C;
        background-color: #2D2D2D;
        box-sizing: content-box;
      }
      .header .content {
        height: 5rem;
        display: flex;
        align-items: center;
        flex-direction: row;
      }
      .header img {
        width: 3rem;
        height: 3rem;
      }
      .header ul {
        display: flex;
        list-style: none;
        margin-top: 0;
        margin-bottom: 0;
        padding: 1rem;
      }
      .header .menu-item {
        padding: 1rem;
        color: #E7E7E7;
        font-weight: 600;
        font-size: 1.125rem;
        text-decoration: none;
      }
      .header .menu-item:hover {
        color: #F9D14C;
        text-decoration: none;
      }
    `}</style>
  </div>
);
