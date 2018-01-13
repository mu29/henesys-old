import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    type: 'text',
  };

  render() {
    const {
      className,
      type,
      ...props
    } = this.props;

    return (
      <div>
        <input
          className={ `form-control ${className}` }
          type={ type }
          { ...props }
        />
        <style jsx>{`
          .form-control {
            padding: 0.5rem;
            border: 0.0625rem solid #E0E0E0;
            border-radius: 0rem;
            box-shadow: none;
          }
          .form-control:focus {
            border-color: #BDBDBD;
            box-shadow: none;
          }
        `}</style>
      </div>
    );
  }
}
