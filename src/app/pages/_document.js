import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import 'moment/locale/ko';

export default class extends Document {
  static async getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    return { html, head, errorHtml, chunks };
  }

  render () {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/nanumgothic.css" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js" />
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
