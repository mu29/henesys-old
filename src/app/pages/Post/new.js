import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withReduxSaga } from 'store';
import App from 'components/Common/App';
import { Editor } from 'components/Editor';

class PostNew extends Component {
  static propTypes = {
    tag: PropTypes.string.isRequired,
  };

  static getInitialProps({ req }) {
    return { tag: req.query.tag };
  }

  render() {
    return (
      <App>
        <Editor tag={ this.props.tag } />
        <style jsx>{`
          .post-new {
          }
        `}</style>
      </App>
    );
  }
}

export default withReduxSaga(PostNew);
