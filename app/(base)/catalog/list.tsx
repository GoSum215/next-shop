'use client'

import Link from 'next/link';
import styles from './catalog.module.css'
import Image from 'next/image';
import Script from 'next/script';
import {useRef, useEffect, useState} from 'react';

export default function List() {
    const filter = useRef(null);
    const sort = useRef(null);
    const arrow2 = useRef(null);
    const arrow1 = useRef(null);
    const Line = useRef(null);
    const [isFilter, setIsFilter] = useState(false);
    const [isSort, setIsSort] = useState(false);
    const [isArrow1, setIsArrow1] = useState(false);
    const [isArrow2, setIsArrow2] = useState(false);

    const filterWindowClick = () => {
        setIsFilter(isFilter => !isFilter)
        setIsArrow1(isArrow1 => !isArrow1)
        setIsSort(isSort => false)
        setIsArrow2(isArrow2 => false)
        //console.log(isSort + " + 1")
    }

    const sortWindowClick = () => {
        setIsSort(isSort => !isSort)
        setIsArrow2(isArrow2 => !isArrow2)
        setIsFilter(isFilter => false)
        setIsArrow1(isArrow1 => false)
        //console.log(isSort + " + 1")
    }

  return (
    <>
        <div className={styles.filters}>
            <div className={styles.filter_mobile} id={styles.filter_m} onClick={filterWindowClick}>
                <p className={styles.filter_title_mobile} id={styles.filterName}>ФИЛЬТРЫ</p>
                <div id={styles.arrow1} className={isArrow1 ? styles.arrow_open + ' ' + styles.arrow : styles.arrow} ref={arrow1}></div>
            </div>
            <div className={styles.sort_mobile} id={styles.sort_m} onClick={sortWindowClick}>
                <p className={styles.filter_title_mobile} id={styles.sortName}>СОРТИРОВКА</p>
                <div id={styles.arrow2} className={isArrow2 ? styles.arrow_open + ' ' + styles.arrow : styles.arrow} ref={arrow2}></div>
            </div>
            <div className={isFilter ? styles.window_open + ' ' + styles.filter : styles.window_close + ' ' + styles.filter} id={styles.filter} ref={filter}> {/* onClick={filterWindowClick} */}
                <p className={styles.filter_title}>ДЛЯ КОГО?</p>
                <form method="get" id={styles.filterForm}>
                    <div className={styles.radio_div}>
                        <input type="checkbox" className={styles.custom_checkbox} id={styles.woman} name="filt" value="1"/> {/* onchange=""  */}
                        <label htmlFor="woman">женская</label>
                    </div>

                    <div className={styles.radio_div}>
                        <input type="checkbox" className={styles.custom_checkbox} id={styles.man} name="filt" value="2" />
                        <label htmlFor="man">мужская</label>
                    </div>

                    <div className={styles.radio_div}>
                        <input type="checkbox" className={styles.custom_checkbox} id={styles.different} name="filt" value="3" />
                        <label htmlFor="different">унисекс</label>
                    </div>
                </form>
            </div>
            <div className={isSort ? styles.window_open + ' ' + styles.sort : styles.window_close + ' ' + styles.sort} id={styles.sort} ref={sort}> {/* onClick={sortWindowClick} */}
                <p className={styles.filter_title} id={styles.sort_title}>СОРТИРОВКА</p>
                <form method="get" id={styles.sortForm}>

                    <div className={styles.radio_div}>
                        <input type="radio" className={styles.custom_checkbox} id={styles.new} name="sort" value="1" checked />
                        <label htmlFor="new">сначала новые</label>
                    </div>

                    <div className={styles.radio_div}>
                        <input type="radio" className={styles.custom_checkbox} id={styles.old} name="sort" value="2" />
                        <label htmlFor="old">сначала старые</label>
                    </div>
                </form>
            </div>
            <div className={styles.clear_filter}>
                <p className={styles.filter_title}>СБРОС</p>
            </div>
        </div>

        <div className={styles.line_parent}>
            {/*<div className={styles.circle"></div>*/}
            <div className={styles.line} id={styles.line} ref={Line}> {/*line_loading*/}

                <Link href="/catalog/slug">
                    <div className={styles.card}>
                        <Image src="/catalog/model_1.png" className={styles.img} alt='model' width={1480} height={2000} />
                        <div className={styles.caption}>Наименование товара 1</div>
                    </div>
                </Link>
                <Link href="/catalog/slug">
                    <div className={styles.card}>
                        <Image src="/catalog/model_2.png" className={styles.img} alt='model' width={1480} height={2000} />
                        <div className={styles.caption}>Наименование товара 2</div>
                    </div>
                </Link>
                <Link href="/catalog/slug">
                    <div className={styles.card}>
                        <Image src="/catalog/model_3.png" className={styles.img} alt='model' width={1480} height={2000} />
                        <div className={styles.caption}>Наименование товара 3</div>
                    </div>
                </Link>
                <Link href="/catalog/slug">
                    <div className={styles.card}>
                        <Image src="/catalog/model_4.png" className={styles.img} alt='model' width={1480} height={2000} />
                        <div className={styles.caption}>Наименование товара 4</div>
                    </div>
                </Link>
                <Link href="/catalog/slug">
                    <div className={styles.card}>
                        <Image src="/catalog/model_5.png" className={styles.img} alt='model' width={1480} height={2000} />
                        <div className={styles.caption}>Наименование товара 5</div>
                    </div>
                </Link>
                <Link href="/catalog/slug">
                    <div className={styles.card}>
                        <Image src="/catalog/model_6.png" className={styles.img} alt='model' width={1480} height={2000} />
                        <div className={styles.caption}>Наименование товара 6</div>
                    </div>
                </Link>
                <Link href="/catalog/slug">
                    <div className={styles.card}>
                        <Image src="/catalog/model_7.png" className={styles.img} alt='model' width={1480} height={2000} />
                        <div className={styles.caption}>Наименование товара 7</div>
                    </div>
                </Link>
                <Link href="/catalog/slug">
                    <div className={styles.card}>
                        <Image src="/catalog/model_8.png" className={styles.img} alt='model' width={1480} height={2000} />
                        <div className={styles.caption}>Наименование товара 8</div>
                    </div>
                </Link>
                <Link href="/catalog/slug">
                    <div className={styles.card}>
                        <Image src="/catalog/model_9.png" className={styles.img} alt='model' width={1480} height={2000} />
                        <div className={styles.caption}>Наименование товара 9</div>
                    </div>
                </Link>

                <div className={styles.description_down}>
                    <div className={styles.desc_down_1row}>
                        <p className={styles.desc_down_title}>ВОЗМОЖНО, ВАМ ПОНРАВИТСЯ</p>
                        <div className={styles.separator}></div>
                    </div>
                    <p className={styles.desc_down_2row}>ХОТИТЕ УВИДЕТЬ БОЛЬШЕ?</p>
                    <p className={styles.desc_down_3row}>НАЖМИТЕ НА СООТВЕТСТВУЮЩУЮ КНОПКУ ВНИЗУ</p>
                    <div className={styles.buttons_link}>
                        <div className={styles.desc_down_button}>
                            <a href="#">ВСЕ КОЛЛЕКЦИИ</a>
                        </div>
                        <div className={styles.desc_down_button}>
                            <a href="#">ВСЕ ДИЗАЙНЕРЫ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}