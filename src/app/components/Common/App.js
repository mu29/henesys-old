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
        <div className="container">
          { this.props.children }
        </div>
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
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
            background-color: #F1F1F1
          }
          .container {
            width: 100%;
          }
          @media (min-width: 768px) {
            .container {
                max-width: 750px;
            }
          }
          @media (min-width: 992px) {
            .container {
                max-width: 970px;
            }
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
