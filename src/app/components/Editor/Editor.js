import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditorTextArea from './EditorTextArea';
import Toolbar from './Toolbar';

export default class Editor extends Component {
  constructor() {
    super();
    this.state = {
      content: '',
    };
  }

  onChangeContent = content => this.setState({ ...this.state, content })

  render() {
    console.log(this.state);
    return (
      <div>
        <Toolbar />
        <EditorTextArea onChange={ this.onChangeContent } html={ this.state.content } />
        <style jsx>{`
        `}</style>
      </div>
    );
  }
}
