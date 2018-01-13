import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormGroup extends Component {
  static propTypes = {
    block: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.element.isRequired,
    label: PropTypes.string,
    horizontal: PropTypes.bool,
  };

  static defaultProps = {
    block: false,
    className: '',
    label: null,
    horizontal: false,
  };

  renderStyle = () => (
    <style jsx>{`
      .form-group > .form-label {
        margin-bottom: 0.25rem;
        font-weight: 300;
        font-color: #BDBDBD;
        font-size: 0.8rem;
      }
      .form-group:last-child {
        margin-bottom: 0;
      }
      .input-group.block {
        width: 100%;
      }
    `}</style>
  );

  renderInputGroup = (children, block) => (
    <div className={ `input-group${block ? ' block' : ''}` }>
      { children }
    </div>
  )

  renderHorizontal = () => {
    const {
      block,
      className,
      children,
      label,
    } = this.props;

    return (
      <div className="form-inline">
        <div className={ `form-group ${className}` }>
          <p className="form-label">
            { label }
          </p>
          { this.renderInputGroup(children, block) }
        </div>
        { this.renderStyle() }
      </div>
    );
  }

  renderVertical = () => {
    const {
      block,
      className,
      children,
      label,
    } = this.props;

    return (
      <div className={ `form-group ${className}` }>
        <div className="form-label">
          { label }
        </div>
        { this.renderInputGroup(children, block) }
        { this.renderStyle() }
      </div>
    );
  }

  render() {
    const {
      block,
      className,
      children,
      label,
      horizontal,
    } = this.props;

    if (!label) {
      return (
        <div className={ `form-group ${className}` }>
          { this.renderInputGroup(children, block) }
          { this.renderStyle() }
        </div>
      );
    }

    return horizontal ? this.renderHorizontal() : this.renderVertical();
  }
}
