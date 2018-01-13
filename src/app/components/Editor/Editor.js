import React, { Component } from 'react';
import Toolbar from './Toolbar';

export default class Editor extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <textarea
          className="editor"
          rows={ 20 }
        />
        <style jsx>{`
          .editor {
            width: 100%;
            padding: 1rem;
            font-family: 'Nanum Gothic';
            font-weight: 300;
            border: 0.0625rem solid #E0E0E0;
            resize: none;
          }
          .editor:active,
          .editor:focus {
            outline: none;
          }
        `}</style>
      </div>
    );
  }
}
