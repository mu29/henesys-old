import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SweetAlert from 'sweetalert2-react';
import { loadAuth } from 'firebase/Firebase';
import { loginActions } from 'modules/Auth';
import { hideAlert } from 'modules/Alert';
import { Modal } from 'components/Modal';
import Header from './Header';

class App extends Component {
  static propTypes = {
    alert: PropTypes.shape({
      show: PropTypes.bool,
      title: PropTypes.string,
      message: PropTypes.string,
      type: PropTypes.string,
      onConfirm: PropTypes.func,
      onCancel: PropTypes.func,
      showCancelButton: PropTypes.bool,
    }).isRequired,
    children: PropTypes.arrayOf(PropTypes.element),
    hideAlert: PropTypes.func.isRequired,
  };

  static defaultProps = {
    children: null,
  };

  componentDidMount() {
    loadAuth().then((auth) => {
      auth.onAuthStateChanged((user) => {
        this.props.login({
          email: user.email,
          name: user.displayName,
        });
      });
    });
  }

  render() {
    const { alert, children, hideAlert } = this.props;
    return (
      <div className="app">
        <Header />
        <div className="container">
          { children }
        </div>
        <Modal />
        <SweetAlert
          show={ alert.show }
          title={ alert.title }
          text={ alert.message }
          type={ alert.type }
          onConfirm={ () => {
            hideAlert();
            alert.onConfirm && alert.onConfirm();
          } }
          onCancel={ () => {
            hideAlert();
            alert.onCancel && alert.onCancel();
          } }
          showCancelButton={ alert.showCancelButton }
          confirmButtonText="확인"
          cancelButtonText="취소"
        />
        <style jsx>{`
          html {
            font-size: 16px;
            font-family: 'Nanum Gothic';
          }
          html, body, body > div:first-child, #__next, #__next > div:first-child  {
            height: 100%;
            margin: 0;
          }
          .app {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
            background-color: #F1F1F1
          }
          .container {
            width: 100%;
          }
          @media (min-width: 768px) {
            .container {
                max-width: 750px;
            }
          }
          @media (min-width: 992px) {
            .container {
                max-width: 970px;
            }
          }
          .glyphicon.fa {
            font-family: "FontAwesome" !important;
          }
          a:hover, a:active, a:focus {
            outline: none;
            text-decoration: none;
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = ({ Alert }) => ({
  alert: Alert.alert,
});

const mapDispatchToProps = dispatch => ({
  hideAlert: () => dispatch(hideAlert()),
  login: user => dispatch(loginActions.success({ user })),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
