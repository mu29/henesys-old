import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThreeBounce } from 'better-react-spinkit';

export default class Loading extends Component {
  static propTypes = {
    identifier: PropTypes.string.isRequired,
    loading: PropTypes.string.isRequired,
    visible: PropTypes.bool,
  }

  static defaultProps = {
    visible: true,
  }

  render() {
    const {
      identifier,
      loading,
      visible,
      ...props
    } = this.props;

    if (identifier !== loading) {
      return null;
    }

    return (
      <div className={ `loading-indicator ${visible ? '' : 'hide'}` }>
        <ThreeBounce duration="1s" { ...props } />
        <style jsx>{`
          .loading-indicator {
            margin: auto;
          }
          .loading-indicator.hide {
            display: none;
          }
        `}</style>
      </div>
    );
  }
}
