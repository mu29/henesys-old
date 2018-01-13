import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class IconButton extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
  };

  render() {
    const { icon, ...props } = this.props;

    return (
      <Button { ...props }>
        <i className={ `fa fa-${icon}` } />
      </Button>
    );
  }
}
