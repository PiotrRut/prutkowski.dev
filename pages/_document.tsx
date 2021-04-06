import Document, { Head, Html, Main, NextScript } from 'next/document';
import { Children } from 'react';
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
        ...Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          {/* Polyfill for smoothscroll as Safari does not support it (sadness) */}
          <script src="https://unpkg.com/smoothscroll-polyfill/dist/smoothscroll.min.js" />
          <script src="https://unpkg.com/smoothscroll-anchor-polyfill" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
