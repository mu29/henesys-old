import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMenuActions } from '../../modules/Menu';

class Header extends Component {
  componentDidMount() {
    this.props.fetchMenus();
  }

  render() {
    const { boards = [] } = this.props;
    return (
      <div className="header">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
            <div className="header-content">
              <a className="header-logo" href="/">
                <img src="/static/logo.png" />
              </a>
              <ul className="header-navigation">
                {
                  boards.map(b => (
                    <li key={ b.id }>
                      <a href={ '/' }>{ b.name }</a>
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
          .header-content {
            height: 5rem;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .header-logo > img {
            width: 3rem;
            height: 3rem;
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
