import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThreeBounce } from 'better-react-spinkit';

export default class Loading extends Component {
  static propTypes = {
    identifier: PropTypes.string.isRequired,
    loading: PropTypes.string.isRequired,
  }

  render() {
    const { identifier, loading, ...props } = this.props;

    if (identifier !== loading) {
      return null;
    }

    return (
      <div className="loading-indicator">
        <ThreeBounce duration="1s" { ...props } />
        <style jsx>{`
          .loading-indicator {
            margin: auto;
          }
        `}</style>
      </div>
    );
  }
}
