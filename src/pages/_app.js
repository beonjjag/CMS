import Header from './common/Header';
import LeftSider from './common/LeftSider';
import Head from 'next/head';
import '../../styles/globals.css';
import '../../styles/header.scss';
import '../../styles/content.scss';

function App({Component, PageProps}) {
    console.log('PageProps ::', PageProps);
    return (
        <>
            {/* 메타태그 및 Head 태그 속성 */}
            <Head>
                <title>토이프로젝트 CMS</title>
                <meta charSet="utf-8"></meta>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;500;700&display=swap" rel="stylesheet" />
            </Head>
            {/* header */}
            <Header />
            {/* //header */}

            <div className="contentWrap">
                {/* Left Sider */}
                <LeftSider />
                {/* //Left Sider */}
                <div className="content">
                    <Component {...PageProps} />
                </div>
            </div>
        </>
    )
    
}

export default App;