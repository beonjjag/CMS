import Header from './common/Header.js';
import Head from 'next/head';
import '../../styles/globals.css';

function App({Component, PageProps}) {
    return (
        <>
            <Head>
                <title>토이프로젝트 CMS</title>
                <meta charSet="utf-8"></meta>
            </Head>
            <Header />
            <Component {...PageProps} />
        </>
    )
    
}

export default App;