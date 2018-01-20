import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SweetAlert from 'sweetalert2-react';
import { loadAuth } from 'firebase/Firebase';
import { loginActions } from 'modules/Auth';
import { hideAlert } from 'modules/Alert';
import { Modal } from 'components/Modal';
import { Header, Container, SideBar, GlobalStyle } from 'components/Common';

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
    login: PropTypes.func.isRequired,
    noSideBar: PropTypes.boolean,
  };

  static defaultProps = {
    children: null,
    noSideBar: false,
  };

  async componentWillMount() {
    const { login } = this.props;
    const auth = loadAuth();
    auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        return;
      }
      login({
        email: currentUser.email,
        name: currentUser.displayName,
      });
    });
  }

  render() {
    const { alert, hideAlert, noSideBar } = this.props;
    const children = React.Children.toArray(this.props.children);

    return (
      <div className="app">
        <Header />
        <div className="container wrapper">
          <Container>
            { children[0] }
          </Container>
          {
            !noSideBar &&
            <SideBar>
              { children.filter((c, i) => i !== 0) }
            </SideBar>
          }
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
          .app {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
            background-color: #F1F1F1
          }
          .app .wrapper {
            display: flex;
            justify-content: space-between;
          }
        `}</style>
        <GlobalStyle />
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
