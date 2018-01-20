import React from 'react';

export default () => (
  <style jsx>{`
    html {
      font-size: 16px;
      font-family: 'Nanum Gothic';
    }
    html, body, body > div:first-child, #__next, #__next > div:first-child  {
      height: 100%;
      margin: 0;
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
);
