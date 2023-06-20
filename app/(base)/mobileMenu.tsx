'use client'

import Link from 'next/link';
import styles from "./styles.module.css"
import Image from 'next/image';
import Script from 'next/script';
import {useRef, useState} from 'react';

export default function MobileMenu() {
    const [isMenu, setIsMenu] = useState(false);

    const menuButtonClick = () => {
        setIsMenu(isMenu => !isMenu)
    }


    return (
        <>
            <div className={isMenu ? styles.menu_btn + ' ' + styles.open : styles.menu_btn} id={styles.menu_btn} onClick={menuButtonClick}>
                <div className={styles.menu_btn__burger}></div>
              </div>
              <div className={isMenu ? styles.dropdownContent + ' ' + styles.dropdownContent_open : styles.dropdownContent} id={styles.menu}>
                <Link href="/catalog">Каталог</Link>
                <Link href="https://cyber-brand.ru/o-proekte/">О проекте</Link>
                <Link href="/ar">AR-подиум</Link>
                <Link href="/contacts">Контакты</Link>
                <Link href="https://t.me/cyberstudio_prim">Сообщество</Link>
              </div>
        </>
    );
}