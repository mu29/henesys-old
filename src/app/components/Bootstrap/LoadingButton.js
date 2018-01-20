import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Loading from './Loading';

export default class LoadingButton extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
    ]).isRequired,
    identifier: PropTypes.string.isRequired,
    loading: PropTypes.string.isRequired,
    loadingColor: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    loadingColor: 'white',
  };

  showLoading = () => (
    <Loading
      identifier={ this.props.identifier }
      loading={ this.props.loading }
      color={ this.props.loadingColor }
    />
  )

  render() {
    const {
      className,
      children,
      identifier,
      loading,
      ...props
    } = this.props;

    return (
      <Button className={ `${className} ${children ? 'loading-button' : ''}` } { ...props }>
        { identifier !== loading ? children : this.showLoading() }
        <style jsx>{`
          .loading-button {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </Button>
    );
  }
}
