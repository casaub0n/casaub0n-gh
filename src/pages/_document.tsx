import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import theme from '../components/theme'
import { ServerStyleSheets } from '@material-ui/core/styles'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        {/* PWA primary color */}
        <title>casaub0n page</title>
        <meta
          name="description"
          content="What's up! I'm a TypeScript lover programmer. Nice to meet you."
        />
        <meta property="og:title" content=" casaub0n page" />
        <meta name="twitter:card" content="summary" />
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  }
}
