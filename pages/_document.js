import Document, { Html, Head, Main, NextScript } from "next/document";

class RootDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body id="bodyRoot" className="lg:overflow-y-auto">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default RootDocument;
