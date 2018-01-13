import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hideModal } from 'modules/Alert';

class Modal extends Component {
  static propTypes = {
    hideModal: PropTypes.func.isRequired,
    modal: PropTypes.shape({
      element: PropTypes.element,
      props: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { hideModal, modal } = this.props;
    if (!modal.show) {
      return null;
    }

    return (
      <div
        className="modal"
        onClick={ e => e.target === e.currentTarget && hideModal() }
      >
        <div className="wrapper">
          { React.cloneElement(modal.element, { ...modal.props, hideModal }) }
        </div>
        <style jsx>{`
          .modal {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.4);
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 999;
          }
          .modal > .wrapper {
            background-color: #FFF;
            z-index: 1000;
            border-radius: 0.25rem;
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = ({ Alert }) => ({
  modal: Alert.modal,
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
