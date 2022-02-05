import Link from 'next/link';

const LeftSider = () => {
    return (
        <div className="leftSider">
            <ul className="menuList">
                <li>
                    <Link href="/about">
                        <a>소개</a>
                    </Link>
                </li>
                <li>
                    <Link href="/team">
                        <a>팀소개</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default LeftSider;