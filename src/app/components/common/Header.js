import React, { Component } from 'react';
import { connect } from 'react-redux';
import css from 'styled-jsx/css'
import { fetchMenuActions } from '../../modules/Menu';

class Header extends Component {
  componentWillMount() {
    this.props.fetchMenus();
  }

  render() {
    const { menus = [] } = this.props;
    return (
      <div className="header">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
            <div className="content">
              <a href="/">
                <img src="/static/logo.png" />
              </a>
              <ul className="menu">
                {
                  menus.map(m => (
                    <li key={ m.id }>
                      <a className="menu-item" href={ '/' }>{ m.name }</a>
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
          .header .menu {
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
          .header .menu-item::hover {
            text-decoration: none;
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = ({ Menu }) => ({
  menus: Menu.menus,
});

const mapDispatchToProps = dispatch => ({
  fetchMenus: () => dispatch(fetchMenuActions.request()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
