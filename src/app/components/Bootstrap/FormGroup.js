import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormGroup extends Component {
  static propTypes = {
    addon: PropTypes.node,
    block: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.element.isRequired,
    label: PropTypes.string,
    horizontal: PropTypes.bool,
  };

  static defaultProps = {
    addon: null,
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
      .form-group > .input-group > .input-group-addon {
        padding: 0 1rem;
        border: 0.0625rem solid #E0E0E0;
        border-right: none;
        color: #616161;
        font-weight: 600;
        background-color: #FAFAFA;
      }
    `}</style>
  );

  renderInputGroup = () => {
    const { children, block, addon } = this.props;
    return (
      <div className={ `input-group${block ? ' block' : ''}` }>
        <div className="input-group-addon">{ addon }</div>
        { children }
      </div>
    );
  }

  renderHorizontal = () => {
    const { className, label } = this.props;
    return (
      <div className="form-inline">
        <div className={ `form-group ${className}` }>
          <p className="form-label">
            { label }
          </p>
          { this.renderInputGroup() }
        </div>
        { this.renderStyle() }
      </div>
    );
  }

  renderVertical = () => {
    const { className, label } = this.props;
    return (
      <div className={ `form-group ${className}` }>
        <div className="form-label">
          { label }
        </div>
        { this.renderInputGroup() }
        { this.renderStyle() }
      </div>
    );
  }

  render() {
    const { className, label, horizontal } = this.props;

    if (!label) {
      return (
        <div className={ `form-group ${className}` }>
          { this.renderInputGroup() }
          { this.renderStyle() }
        </div>
      );
    }

    return horizontal ? this.renderHorizontal() : this.renderVertical();
  }
}
