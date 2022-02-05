import Link from 'next/link';

const Header = () => {
    return (
        <header className="header">
            <h1>
                <Link href="/">
                    <a>ToyProject(CMS)</a>
                </Link>
            </h1>

            <ul className="utilList">
                <li><a href="">옵션</a></li>
                <li><a href="">옵션1</a></li>
                <li><a href="">옵션2</a></li>
                <li><a href="">옵션3</a></li>
                <li><a href="">옵션4</a></li>
                <li><a href=""><div className="peoplePictrue"></div></a></li>
            </ul>
        
        </header>
    )
}

export default Header;