import { Children } from 'react'
import Link from 'next/link'
import Style from './button.module.scss'

export default function Button() {
    return (
        <React.Fragment>
            <Link href="/">
                <a className={Style.button}></a>
            </Link>
        </React.Fragment>
    )
}