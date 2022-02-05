import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <Link href="/">
                <a>Hi</a>
            </Link>
            <Link href="about">
                <a>소개</a>
            </Link>
            <Link href="team">
                <a>팀소개</a>
            </Link>
        </header>
    )
}

export default Header;