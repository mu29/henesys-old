import React, { Component } from 'react';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        { this.props.children }
        <style jsx>{`
          html {
            font-size: 16px;
          }
          html, body, body > div:first-child, #__next, #__next > div:first-child  {
            height: 100%;
            margin: 0;
          }
          .app {
            height: 100%;
            background-color: #F1F1F1
          }
        `}</style>
      </div>
    );
  }
}
