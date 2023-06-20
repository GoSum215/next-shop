'use client'

import Link from 'next/link';
import styles from './catalog-item.module.css'
import Image from 'next/image';
import Script from 'next/script';
import {useRef, useEffect, useState} from 'react';

export default function List() {
    const [isPhotos, setIsPhotos] = useState(false);

    let main_photo = document.getElementsByClassName('main_photo');
    let scroll_photo = document.getElementsByClassName('scroll_photo');

    let n = scroll_photo.length;

    // if (n !== 1) {
    //     setIsPhotos(isPhotos => true);
    // }

    useEffect(() => {
        let cur = 0;
    
        for (let i = 0; i < n; i++) {
            scroll_photo[i].addEventListener("click", function (evt) {
                if (cur !== i) {
                    console.log(i);
                    // // main_photo[cur].style.position = 'absolute';
                    // main_photo[cur].style.opacity = '0';
                    // main_photo[cur].style.zIndex = '-1';
                    // scroll_photo[cur].classList.remove("active_photo");
                    // // main_photo[i].style.position = 'relative';
                    // main_photo[i].style.opacity = '1';
                    // main_photo[i].style.zIndex = '10';
                    // scroll_photo[i].classList.add("active_photo");
                    // cur = i;
                }
            });
        }
    }, []);



  return (
    <>
        <div className={styles.content}>
            <div className={styles.back_mobile}>
                <Link href="/catalog"> Вернуться в каталог</Link>
            </div>
            <div className={styles.name_mobile}>ПЛАТЬЕ GORANSKAYA L</div>
            <div className={styles.images}>
                <Image src="/catalog-item/model_1.png" className={styles.main_photo} alt='model' width={1480} height={2200} />
                {/* <Image src="/catalog-item/model_2.png" className={styles.main_photo} alt='model' width={1480} height={2200} />
                <Image src="/catalog-item/model_3.png" className={styles.main_photo} alt='model' width={1480} height={2200} />
                <Image src="/catalog-item/model_4.png" className={styles.main_photo} alt='model' width={1480} height={2200} />
                <Image src="/catalog-item/model_5.png" className={styles.main_photo} alt='model' width={1480} height={2200} />
                <Image src="/catalog-item/model_6.png" className={styles.main_photo} alt='model' width={1480} height={2200} />
                <Image src="/catalog-item/model_7.png" className={styles.main_photo} alt='model' width={1480} height={2200} />
                <Image src="/catalog-item/model_8.png" className={styles.main_photo} alt='model' width={1480} height={2200} />
                <Image src="/catalog-item/model_9.png" className={styles.main_photo} alt='model' width={1480} height={2200} /> */}
            </div>
            <section className={isPhotos ? styles.all_photos : styles.zero_photo}>
                <div className={styles.scroll_photo + ' ' + styles.active_photo}>
                    <Image src="/catalog-item/model_1.png" className={styles.select_photo} alt='model' width={1480} height={2200} />
                </div>
                {/* <div className={styles.scroll_photo}>
                    <Image src="/catalog-item/model_2.png" className={styles.select_photo} alt='model' width={1480} height={2200} />
                </div>
                <div className={styles.scroll_photo}>
                    <Image src="/catalog-item/model_3.png" className={styles.select_photo} alt='model' width={1480} height={2200} />
                </div>
                <div className={styles.scroll_photo}>
                    <Image src="/catalog-item/model_4.png" className={styles.select_photo} alt='model' width={1480} height={2200} />
                </div>
                <div className={styles.scroll_photo}>
                    <Image src="/catalog-item/model_5.png" className={styles.select_photo} alt='model' width={1480} height={2200} />
                </div>
                <div className={styles.scroll_photo}>
                    <Image src="/catalog-item/model_6.png" className={styles.select_photo} alt='model' width={1480} height={2200} />
                </div>
                <div className={styles.scroll_photo}>
                    <Image src="/catalog-item/model_7.png" className={styles.select_photo} alt='model' width={1480} height={2200} />
                </div>
                <div className={styles.scroll_photo}>
                    <Image src="/catalog-item/model_8.png" className={styles.select_photo} alt='model' width={1480} height={2200} />
                </div>
                <div className={styles.scroll_photo}>
                    <Image src="/catalog-item/model_9.png" className={styles.select_photo} alt='model' width={1480} height={2200} />
                </div> */}
            </section>
        </div>
    </>
  );
}