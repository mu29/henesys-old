import React, { Component } from 'react';

const properties = [{
  name: 'bold',
  button: <b>가</b>,
  command: 'bold',
}, {
  name: 'italic',
  button: <i>가</i>,
  command: 'italic',
}, {
  name: 'underline',
  button: <u>가</u>,
  command: 'underline',
}];

export default class Toolbar extends Component {
  applyCommand = (command) => {
    document.execCommand(command);
  }

  render() {
    const ToolbarItem = ({ children, ...props }) => (
      <button className="editor-toolbar-item" { ...props }>
        { children }
      </button>
    );

    return (
      <div className="editor-toolbar">
        {
          properties.map(p => (
            <ToolbarItem onClick={ () => this.applyCommand(p.command) }>
              { p.button }
            </ToolbarItem>
          ))
        }
        <style jsx>{`
          .editor-toolbar {
            display: flex;
            flex-direction: row;
            width: 100%;
            border: 0.0625rem solid #E0E0E0;
            background: white;
          }
          .editor-toolbar-item {
            width: 3rem;
            height: 3rem;
            border: none;
            color: #424242;
            text-align: center;
            font-size: 1rem;
            background-color: white;
          }
          .editor-toolbar-item:active,
          .editor-toolbar-item:focus,
          .editor-toolbar-item:hover {
            outline: none;
          }
          .editor-toolbar-item:hover {
            color: #2D2D2D;
            background-color: #F7F7F7;
          }
        `}</style>
      </div>
    );
  }
}
