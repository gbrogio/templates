import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  // permite criação de estilos css em javascript
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  // eslint-disable-next-line no-undef
  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          {/* METAS */}
          <meta charSet="UTF-8" />
          <meta name="description" content="App Name" />

          {/* LOGO */}
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <body>
          <Main />

          {/* SCRIPTS */}
          <NextScript />
        </body>
      </Html>
    );
  }
}
