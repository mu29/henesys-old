import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Menus from 'constants/Menu';
import { showModal } from 'modules/Alert';
import { LoginModal } from 'components/Modal';
import { IconButton, Link } from 'components/Bootstrap';

class Header extends Component {
  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string,
      name: PropTypes.string,
    }),
    showModal: PropTypes.func.isRequired,
  };

  static defaultProps = {
    user: null,
  };

  onClickProfile = () => {
    const { user, showModal } = this.props;
    if (!user) {
      showModal(<LoginModal />);
    }
  }

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="content">
            <div className="menu-area">
              <a href="/">
                <img src="/static/logo.png" alt="헤네시스" />
              </a>
              <ul>
                {
                  Menus.map(m => (
                    <li key={ m.id }>
                      <Link
                        className="menu-item"
                        href="posts"
                        query={{ tag: m.id }}
                      >
                        { m.name }
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            <IconButton
              icon="user"
              color="black"
              size={ 24 }
              onClick={ this.onClickProfile }
            />
          </div>
        </div>
        <style jsx>{`
          .header {
            width: 100%;
            height: 5rem;
            margin-bottom: 1.5rem;
            border-bottom: 0.25rem solid #F9D14C;
            background-color: #2D2D2D;
            box-sizing: content-box;
          }
          .header .content {
            height: 5rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          .header .content .menu-area {
            display: flex;
            flex-direction: row;
            align-items: center;
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
          .header .btn:hover {
            color: #F9D14C;
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = ({ Auth }) => ({
  user: Auth.user,
});

export default connect(mapStateToProps, { showModal })(Header);
