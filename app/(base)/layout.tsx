import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import styles from "./styles.module.css"
import { Roboto } from 'next/font/google'
import MobileMenu from "./mobileMenu";
import CurLink from "./curLink"

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <>
      <html lang="ru" className={roboto.className}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          {/* <link rel="stylesheet" href="style.css" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" /> */}
        </Head>
        <body className={styles.body}>
          <header className={styles.header}>
            <CurLink />
            <div className={styles.rightSide}>
              {/* <button className={styles.headBtn}> */}
                <Link className={styles.headBtn} href="/ar">AR-подиум</Link>
              {/* </button> */}
            </div>
          </header>
          <div className={styles.headerMobile}>
            <div className={styles.dropdown}>
              <MobileMenu />
            </div>
            <div className={styles.logo}>
              <Link href="/"><Image src="/layout/logo.svg" height={40} width={310} alt="logo"/></Link> 
            </div>
            <div className={styles.help}></div>
          </div>

        
          {children}

          <footer className={styles.footer}>
            <div className={styles.top}>
              <Image src="/layout/logo2.svg" width={264} height={34} alt="logo"/>
              <div className={styles.topText}>
                <Link href="https://www.dvfu.ru/institute_of_mathematics_and_computer_technologies/ob-institute/">Сделано в ИМКТ ДВФУ</Link>
                <p> </p>
                <Link href="https://vvsu.ru/">Совместно с ВВГУ</Link>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.bottomLeft}>
                <Link href="/catalog">каталог</Link>
                <Link href="https://cyber-brand.ru/o-proekte/">о проекте</Link>
                <Link href="/ar">AR-подиум</Link>
                <Link href="/contacts">контакты</Link>
                <Link href="https://t.me/cyberstudio_prim">сообщество</Link>
              </div>
              <div className={styles.bottomRight}>
                <Link href="https://www.dvfu.ru/"><Image src="/layout/FEFU.svg" width={80} height={49} alt="fefu"/></Link>
              </div>
            </div>
          </footer>
          <div className={styles.footerMobile}>
            <div className={styles.leftFooter}>
              <Link href="/catalog">каталог</Link>
              <Link href="https://cyber-brand.ru/o-proekte/">о проекте</Link>
              <Link href="/ar">AR-подиум</Link>
              <Link href="/contacts">контакты</Link>
              <Link href="https://t.me/cyberstudio_prim">сообщество</Link>
            </div>
            <div className={styles.rightFooter}>
              <Link href="https://www.dvfu.ru/institute_of_mathematics_and_computer_technologies/ob-institute/">Сделано в ИМКТ ДВФУ</Link>
              <Link href="https://vvsu.ru/">Совместно с ВВГУ</Link>
              <Link href="https://www.dvfu.ru/"><Image src="layout/FEFU.svg" width={150} height={92} alt="fefu" /></Link>
            </div>
          </div>
          {/* <Script></Script> */}
        </body>
      </html>
    </>
  );
}


