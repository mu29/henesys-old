import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showModal } from 'modules/Alert';
import { FormGroup, Input, IconButton } from 'components/Bootstrap';
import RegisterModal from './RegisterModal';

class LoginModal extends Component {
  static propTypes = {
    showModal: PropTypes.func.isRequired,
  };

  onClickRegister = () => this.props.showModal(<RegisterModal />);

  render() {
    return (
      <div className="login-modal">
        <h3>로그인</h3>
        <div className="content">
          <FormGroup block>
            <Input placeholder="이메일" />
          </FormGroup>
          <FormGroup block>
            <Input type="password" placeholder="비밀번호" />
          </FormGroup>
        </div>
        <div className="submit">
          <p onClick={ this.onClickRegister }>계정이 없으신가요?</p>
          <IconButton icon="sign-in" color="black" onClick={ this.onClickLogin } />
        </div>
        <style jsx>{`
          .modal > .wrapper {
            width: 25rem;
            max-width: 90%;
          }
          .login-modal {
            border-radius: 0.25rem;
          }
          .login-modal h3 {
            margin: 0;
            padding: 1rem;
            border-top-right-radius: 0.25rem;
            border-top-left-radius: 0.25rem;
            border-bottom: 0.25rem solid #F9D14C;
            font-size: 1.125rem;
            font-weight: 400;
            text-align: center;
            color: #E7E7E7;
            background-color: #2D2D2D;
          }
          .login-modal .content {
            padding: 1.5rem;
          }
          .login-modal .content input {
            height: 2.5rem;
          }
          .login-modal .submit {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 1.6rem;
            border-top: 0.0625rem solid #E7E7E7;
            border-bottom-right-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
            background-color: #F5F5F5;
          }
          .login-modal .submit p {
            margin: 0;
            color: #616161;
            font-weight: 400;
            cursor: pointer;
          }
          .login-modal .submit p:hover {
            color: #2D2D2D;
          }
        `}</style>
      </div>
    );
  }
}

export default connect(null, { showModal })(LoginModal);
