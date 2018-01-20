import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Container extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    return (
      <div className="container-area">
        { this.props.children }
        <style jsx>{`
          .container-area {
            flex: 1;
            margin-right: 1.5rem;
          }
        `}</style>
      </div>
    );
  }
}
