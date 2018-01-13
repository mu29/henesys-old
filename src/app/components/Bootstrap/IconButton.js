import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class IconButton extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.number,
  };

  static defaultProps = {
    size: 14,
  };

  render() {
    const { icon, size, ...props } = this.props;

    return (
      <Button { ...props }>
        <i style={{ fontSize: size }} className={ `fa fa-${icon}` } />
      </Button>
    );
  }
}
