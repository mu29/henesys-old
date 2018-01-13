import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal';
import Header from './Header';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    return (
      <div className="app">
        <Modal />
        <Header />
        { this.props.children }
        <style jsx>{`
          html {
            font-size: 16px;
            font-family: 'Nanum Gothic';
          }
          html, body, body > div:first-child, #__next, #__next > div:first-child  {
            height: 100%;
            margin: 0;
          }
          .app {
            height: 100%;
            background-color: #F1F1F1
          }
          .glyphicon.fa {
            font-family: "FontAwesome" !important;
          }
          a:hover, a:active, a:focus {
            outline: none;
            text-decoration: none;
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  }
}
