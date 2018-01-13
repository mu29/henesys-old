import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withReduxSaga } from 'store';
import App from 'components/Common/App';
import { Editor } from 'components/Editor';

class PostNew extends Component {
  render() {
    return (
      <App>
        <Editor />
        <style jsx>{`
          .post-new {
          }
        `}</style>
      </App>
    );
  }
}

export default withReduxSaga(PostNew);
