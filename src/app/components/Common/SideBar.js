import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SideBar extends Component {
  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string,
      name: PropTypes.string,
    }),
    children: PropTypes.element,
  };

  static defaultProps = {
    children: null,
  };

  static defaultProps = {
    user: null,
  };

  render() {
    return (
      <div className="sidebar-area">
        { this.props.children }
        <style jsx>{`
          .sidebar-area {
            width: 14rem;
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = ({ Auth }) => ({
  user: Auth.user,
});

export default connect(mapStateToProps)(SideBar);
