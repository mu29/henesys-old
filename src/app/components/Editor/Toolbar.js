import React, { Component } from 'react';

const properties = [{
  name: 'strong',
  element: <strong>가</strong>,
}, {
  name: 'italic',
  element: <i>가</i>,
}, {
  name: 'underline',
  element: <u>가</u>,
}, {
  name: 'stroke',
  element: <s>가</s>,
}];

export default class Toolbar extends Component {
  render() {
    const ToolbarItem = props => (
      <button className="editor-toolbar-item">
        { props.children }
        <style jsx>{`
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
            color: #2D2D2D;
            background-color: #F7F7F7;
          }
        `}</style>
      </button>
    );

    return (
      <div className="editor-toolbar">
        { properties.map(p => (<ToolbarItem>{ p.element }</ToolbarItem>)) }
        <style jsx>{`
          .editor-toolbar {
            display: flex;
            flex-direction: row;
            width: 100%;
            border: 0.0625rem solid #E0E0E0;
            background: white;
          }
        `}</style>
      </div>
    );
  }
}
