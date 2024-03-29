import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showModal } from 'modules/Alert';
import { registerActions } from 'modules/Auth';
import { FormGroup, Input, IconButton } from 'components/Bootstrap';
import LoginModal from './LoginModal';

class RegisterModal extends Component {
  static propTypes = {
    register: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
  };

  state = {
    email: '',
    password: '',
    name: '',
  };

  onClickLogin = () => this.props.showModal(<LoginModal />);

  onClickRegister = () => {
    const { register } = this.props;
    const { email, password, name } = this.state;
    register(email, password, name);
  }

  onChangeValue = (key, value) => {
    this.setState({ ...this.state, [key]: value });
  }

  render() {
    const { message } = this.props;
    return (
      <div className="register-modal">
        <h3>회원가입</h3>
        <div className="content">
          <FormGroup block>
            <Input
              placeholder="이메일"
              onChange={ ({ target }) => this.onChangeValue('email', target.value) }
            />
          </FormGroup>
          <FormGroup block>
            <Input
              type="password"
              placeholder="비밀번호"
              onChange={ ({ target }) => this.onChangeValue('password', target.value) }
            />
          </FormGroup>
          <FormGroup block>
            <Input
              placeholder="닉네임"
              onChange={ ({ target }) => this.onChangeValue('name', target.value) }
            />
          </FormGroup>
          {
            message &&
            <p className="error">
              { message }
            </p>
          }
        </div>
        <div className="submit">
          <p onClick={ this.onClickLogin }>이미 계정이 있으세요?</p>
          <IconButton icon="sign-in" color="black" onClick={ this.onClickRegister } />
        </div>
        <style jsx>{`
          .modal > .wrapper {
            width: 25rem;
            max-width: 90%;
          }
          .register-modal {
            border-radius: 0.25rem;
          }
          .register-modal h3 {
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
          .register-modal .content {
            padding: 1.5rem;
          }
          .register-modal .content input {
            height: 2.5rem;
          }
          .register-modal .submit {
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
          .register-modal .submit p {
            margin: 0;
            color: #616161;
            font-weight: 400;
            cursor: pointer;
          }
          .register-modal .submit p:hover {
            color: #2D2D2D;
          }
          .register-modal .error {
            width: 100%;
            margin-bottom: -0.5rem;
            text-align: center;
            color: #F2777A;
            font-size: 0.75rem;
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = ({ Alert }) => ({
  message: Alert.message,
});

const mapDispatchToProps = dispatch => ({
  register: (email, password, name) => dispatch(registerActions.request({ email, password, name })),
  showModal: (element, props) => dispatch(showModal(element, props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterModal);
