import Link from 'next/link'
import Style from './navbar.module.scss'

export default function Navbar() {
    return (
        <React.Fragment>
            <div className="container">
                <nav className={Style.navbar}>
                    <div className={Style.brand}>
                        <h1 className={Style.h1}>Sacrè.</h1>
                    </div>
                    <div className={Style.nav_link}>
                        <Link href="/">
                            <a className={Style.nav_item_active}>Home</a>
                        </Link>
                        <Link href="/about">
                            <a className={Style.nav_item}>About</a>
                        </Link>
                        <Link href="/product">
                            <a className={Style.nav_item}>Product</a>
                        </Link>
                        <Link href="/contact">
                            <a className={Style.nav_item}>Contact</a>
                        </Link>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    )
}