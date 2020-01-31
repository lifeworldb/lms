import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    center

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />

                    <script src="/js/uikit.min.js"></script>
                    <script src="/js/uikit-icons.min.js"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument