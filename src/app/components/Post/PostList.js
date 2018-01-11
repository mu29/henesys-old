import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import { readPostList } from 'firebase/PostApi';

class PostList extends Component {
  componentDidMount() {
    readPostList('notice', null)
      .then(result => console.log(result));
  }
  render() {
    return (
      <div className="post-list">
        <style jsx>{`
          .post-list {
            flex: 3;
            height: 50vh;
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
