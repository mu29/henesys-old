import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'routes';

export default class Link extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.array,
    ]),
    href: PropTypes.string.isRequired,
    query: PropTypes.objectOf(PropTypes.string),
  };

  static defaultProps = {
    className: '',
    children: null,
    query: {},
  };

  onClick = () => {
    const { href, query } = this.props;
    const params = Object.keys(query).map(key => `${key}=${query[key]}`).join('&');
    Router.pushRoute(`${href}?${params}`);
  }

  render() {
    const { className, children, ...props } = this.props;

    return (
      <span
        className={ `link ${className}` }
        onClick={ this.onClick }
        { ...props }
      >
        { children }
        <style jsx>{`
          .link {
            cursor: pointer;
          }
        `}</style>
      </span>
    );
  }
}
