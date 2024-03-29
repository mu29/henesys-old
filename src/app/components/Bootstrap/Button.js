import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  static propTypes = {
    block: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.array,
    ]).isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    block: false,
    className: '',
    color: 'normal',
    onClick: () => null,
  };

  render() {
    const {
      block,
      className,
      children,
      color,
      onClick,
      ...props
    } = this.props;

    return (
      <button
        className={ `btn btn-${color} ${block ? 'btn-block' : ''} ${className}` }
        onClick={ onClick }
        { ...props }
      >
        { children }
        <style jsx>{`
          .btn {
            color: #F1F1F1;
          }
          .btn:active,
          .btn:focus {
            color: #F1F1F1;
            outline: none !important;
          }
          .btn:hover {
            color: #F9D14C;
            outline: none !important;
          }
          .btn-normal {
            background-color: #9E9E9E;
          }
          .btn-black {
            background-color: #2D2D2D;
          }
          .btn-yellow {
            background-color: #F9D14C;
          }
        `}</style>
      </button>
    );
  }
}
