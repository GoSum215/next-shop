import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import styles from "./styles.module.css"
import { Roboto } from 'next/font/google'

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
          {/* <link rel="stylesheet" href="style.css" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" /> */}
        </Head>
        <body className={styles.body}>
          <header className={styles.header}>
            <div className={styles.leftSide}>
              <Link href="/"><Image src="layout/logo.svg" alt="logo" width={264} height={34} /></Link>
              <Link className={styles.active} href="/catalog">Каталог</Link>
              <Link href="https://cyber-brand.ru/o-proekte/">О проекте</Link>
              <Link href="/contacts">Контакты</Link>
            </div>
            <div className={styles.rightSide}>
              {/* <button className={styles.headBtn}> */}
                <Link className={styles.headBtn} href="/ar">AR-подиум</Link>
              {/* </button> */}
            </div>
          </header>
          <div className={styles.headerMobile}>
            <div className={styles.dropdown}>
              <div className={styles.menu_btn}>
                <div className={styles.menu_btn__burger}></div>
              </div>
              <div className={styles.dropdownContent} id="menu">
                <Link href="/catalog">Каталог</Link>
                <Link href="https://cyber-brand.ru/o-proekte/">О проекте</Link>
                <Link href="/ar">AR-подиум</Link>
                <Link href="/contacts">Контакты</Link>
                <Link href="https://t.me/cyberstudio_prim">Сообщество</Link>
              </div>
            </div>
            <div className={styles.logo}>
              <Link href="/"><Image src="layout/logo.svg" height={40} width={310} alt="logo"/></Link> 
            </div>
            <div className={styles.help}></div>
          </div>

        
          {children}

          <footer className={styles.footer}>
            <div className={styles.top}>
              <Image src="layout/logo2.svg" width={264} height={34} alt="logo"/>
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
                <Link href="https://www.dvfu.ru/"><Image src="layout/FEFU.svg" width={80} height={49} alt="fefu"/></Link>
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

if (typeof window !== 'undefined') {
  const menuBtn = document.querySelector('.menu-btn');
  let menuOpen = false;

  menuBtn.addEventListener('click', () => {
      if (!menuOpen) {
          menuBtn.classList.add('open');
          menuOpen = true;
          document.getElementById("menu").style.display = "flex"
      } else {
          menuBtn.classList.remove('open');
          menuOpen = false;
          document.getElementById("menu").style.display = "none"
      }
  });
}

