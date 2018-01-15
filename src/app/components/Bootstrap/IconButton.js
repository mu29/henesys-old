import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class IconButton extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
    ]),
    icon: PropTypes.string.isRequired,
    size: PropTypes.number,
  };

  static defaultProps = {
    className: '',
    size: 14,
    children: null,
  };

  render() {
    const {
      className,
      children,
      icon,
      size,
      ...props
    } = this.props;

    return (
      <Button
        className={ `${className} ${children ? 'icon-button' : ''}` }
        style={{ fontSize: size }}
        { ...props }
      >
        <i style={{ fontSize: size }} className={ `fa fa-${icon}` } />
        { children }
        <style jsx>{`
          .icon-button {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 0.5rem 1rem;
            border: none;
            border-left: 0.3rem solid #F9D14C;
            border-radius: 0.125rem;
            text-align: center;
          }
          .icon-button:hover {
            color: white;
          }
          .icon-button .fa {
            margin-right: 0.5rem;
          }
        `}</style>
      </Button>
    );
  }
}
