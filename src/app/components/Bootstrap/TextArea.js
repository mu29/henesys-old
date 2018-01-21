import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextArea extends Component {
  static propTypes = {
    wrapperClassName: PropTypes.string,
    className: PropTypes.string,
    row: PropTypes.string,
  };

  static defaultProps = {
    wrapperClassName: '',
    className: '',
    row: '3',
  };

  render() {
    const {
      wrapperClassName,
      className,
      row,
      ...props
    } = this.props;

    return (
      <div className={ wrapperClassName }>
        <textarea
          className={ `text-area form-control ${className}` }
          row={ row }
          { ...props }
        />
        <style jsx>{`
          .text-area {
            resize: none;
          }
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
