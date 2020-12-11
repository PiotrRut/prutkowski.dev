import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ],
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          {/* Polyfill for smoothscroll as Safari does not support it (sadness) */}
          <script src="https://polyfill.io/v3/polyfill.min.js?features=smoothscroll" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
