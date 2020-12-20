import Link from 'next/link'
import Image from 'next/image'
import Style from './hero.module.scss'

export default function Hero() {
    return (
        <React.Fragment>
            <div className="container">
                <div className={Style.hero}>
                    <div className={Style.textwrapper}>
                        <h1 className={Style.titleHero}>Enjoy the Sound of Silent</h1>
                        <p className={Style.contentHero}>Introduce our brand called
                        <br /> sacrè
                        <br /> [sa:kre] noun
                        <br /> suci • yang dipersembahkan
                        </p>
                        <Link href="/">
                            <a className={Style.button}>Explore</a>
                        </Link>
                    </div>
                    <div className={Style.imgwrapper}>
                        <Image
                            src="/assets/image/sacre3.jpeg"
                            layout="responsive"
                            width={500}
                            height={425}

                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}