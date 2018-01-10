import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostList extends Component {
  render() {
    return (
      <div className="post-list">
        <style jsx>{`
          .post-list {
            flex: 3;
            height: 100vh;
            margin-right: 1.5rem;
            border-radius: 0.25rem;
            background-color: white;
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = ({ Menu }) => ({
  menus: Menu.menus,
});

export default connect(mapStateToProps)(PostList);
