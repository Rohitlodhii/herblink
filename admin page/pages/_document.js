import Document, { Html, Head, Main, NextScript } from 'next/document'
import fs from 'fs'
import path from 'path'

class MyDocument extends Document {
  static async getInitialProps(ctx){
    const initialProps = await Document.getInitialProps(ctx)
    const cssPath = path.join(process.cwd(), 'styles', 'globals.css')
    let inlineCss = ''
    try{
      inlineCss = fs.readFileSync(cssPath, 'utf8')
    }catch(err){
      // if the file isn't available, continue without inlining
      console.error('Could not read globals.css for inlining:', err && err.message)
    }
    return { ...initialProps, inlineCss }
  }

  render(){
    return (
      <Html lang="en">
        <Head>
          {/* UX4G stylesheet (CDN) - replace URL if your environment requires a different path */}
          <link rel="preconnect" href="https://cdn.ux4g.gov.in" />
          <link rel="stylesheet" href="https://cdn.ux4g.gov.in/ux4g/ux4g.min.css" />
          {/* Inline local globals.css as a fallback to ensure styles render even if static asset requests fail */}
          <style dangerouslySetInnerHTML={{ __html: this.props.inlineCss || '' }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
