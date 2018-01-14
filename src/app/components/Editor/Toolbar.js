import React, { Component } from 'react';

const commands = [{
  button: <b>가</b>,
  command: () => document.execCommand('bold'),
}, {
  button: <i>가</i>,
  command: () => document.execCommand('italic'),
}, {
  button: <u>가</u>,
  command: () => document.execCommand('underline'),
}, {
  button: <s>가</s>,
  command: () => document.execCommand('strikeThrough'),
}, {
  button: <span>나<font size="1"> 크게</font></span>,
  command: () => document.execCommand('fontSize', false, 5),
}, {
  button: <span>나<font size="1"> 중간</font></span>,
  command: () => document.execCommand('fontSize', false, 3),
}, {
  button: <span>나<font size="1"> 작게</font></span>,
  command: () => document.execCommand('fontSize', false, 1),
}, {
  button: <span style={{ color: '#000' }}>다</span>,
  command: () => document.execCommand('foreColor', false, '#000'),
}, {
  button: <span style={{ color: '#F00' }}>다</span>,
  command: () => document.execCommand('foreColor', false, '#F00'),
}, {
  button: <span style={{ color: '#00F' }}>다</span>,
  command: () => document.execCommand('foreColor', false, '#00F'),
}];

export default class Toolbar extends Component {
  render() {
    const ToolbarItem = ({ children, ...props }) => (
      <button className="editor-toolbar-item" { ...props }>
        { children }
      </button>
    );

    return (
      <div className="editor-toolbar">
        {
          commands.map(p => (
            <ToolbarItem onClick={ p.command }>
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
            border-bottom: none;
            border-top-left-radius: 0.25rem;
            border-top-right-radius: 0.25rem;
            background: white;
          }
          .editor-toolbar-item:first-child {
            border-top-left-radius: 0.25rem;
          }
          .editor-toolbar-item {
            display: flex;
            align-items: center;
            justify-content: center;
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
