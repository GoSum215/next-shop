'use client'

import Link from 'next/link';
import styles from './catalog.module.css'
import Image from 'next/image';
import Script from 'next/script';

export default function List() {
    function Filter(){
        let window = document.getElementById("filter");
        let arrow = document.getElementById("arrow1");
        let line = document.getElementById("line");
        if(window.classList.contains("window_close")){
            // window.style.display = 'flex';
            window.classList.add("window_open");
            window.classList.remove("window_close");
            arrow.classList.add("arrow_open");
            line.classList.add("line_loading");
        }
        else{
            // window.style.display = 'none';
            window.classList.add("window_close");
            window.classList.remove("window_open");
            arrow.classList.remove("arrow_open");
            line.classList.remove("line_loading");
        }
    }
    
    function Sort(){
        let window = document.getElementById("sort");
        let arrow = document.getElementById("arrow2");
        let line = document.getElementById("line");
        if(window.classList.contains("window_close")){
            // window.style.display = 'flex';
            window.classList.add("window_open");
            window.classList.remove("window_close");
            arrow.classList.add("arrow_open");
            line.classList.add("line_loading");
        }
        else{
            // window.style.display = 'none';
            window.classList.add("window_close");
            window.classList.remove("window_open");
            arrow.classList.remove("arrow_open");
            line.classList.remove("line_loading");
        }
    }
    
    function clickButton(element){
        if(element.id === 'filterBTN'){
            document.getElementById("filter").classList.add("window_close");
            document.getElementById("filter").classList.remove("window_open");
            document.getElementById("arrow1").classList.remove("arrow_open");
        }
    
        if(element.id === 'sortBTN'){
            document.getElementById("sort").classList.add("window_close");
            document.getElementById("sort").classList.remove("window_open");
            document.getElementById("arrow2").classList.remove("arrow_open");
        }
    }
    
    if (typeof window !== 'undefined') {
        document.addEventListener('click', function(e) {
            if(e.target.id !== 'filter_m' && e.target.id !=='filterName'&& e.target.id !=='arrow1'&& document.getElementById(e.target.id) !== null && !document.getElementById(e.target.id).closest('#filter')){
                if (e.target.id !== 'filter') {
                    document.getElementById('filter').classList.add("window_close");
                    document.getElementById('filter').classList.remove("window_open");
                    document.getElementById("arrow1").classList.remove("arrow_open");
                }
            }
            if(e.target.id !== 'sort_m' && e.target.id !== 'sortName' && e.target.id !== 'arrow2' && document.getElementById(e.target.id) !== null && !document.getElementById(e.target.id).closest('#sort')){
                if (e.target.id !== 'sort') {
                    document.getElementById('sort').classList.add("window_close");
                    document.getElementById('sort').classList.remove("window_open");
                    document.getElementById("arrow2").classList.remove("arrow_open");
                }
            }
        });
    }
  return (
    <>
        <div className={styles.filters}>
            <div className={styles.filter_mobile} id={styles.filter_m} onClick={Filter}> {/* - - - - */}
                <p className={styles.filter_title_mobile} id={styles.filterName}>ФИЛЬТРЫ</p>
                <div id={styles.arrow1} className={styles.arrow}></div>
                {/*<img id={styles.arrow1} src="assets/Arrow%201.svg"/>*/}
            </div>
            <div className={styles.sort_mobile} id={styles.sort_m} onClick={Sort}>
                <p className={styles.filter_title_mobile} id={styles.sortName}>СОРТИРОВКА</p>
                <div id={styles.arrow2} className={styles.arrow}></div>
            </div>
            <div className={styles.filter + ' ' + styles.window_close} id={styles.filter}>
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
            <div className={styles.sort + ' ' + styles.window_close} id={styles.sort}>
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
            <div className={styles.line} id={styles.line}> {/*line_loading*/}

                <Link href="/">
                    <div className={styles.card}>
                        <Image src="/catalog/model_1.png" className={styles.img} alt='model' width={1480} height={2000} />
                        <div className={styles.caption}>Наименование товара 1</div>
                    </div>
                </Link>
                <Link href="/">
                    <div className={styles.card}>
                        <Image src="/catalog/model_2.png" className={styles.img} alt='model' width={1480} height={2000} />
                        <div className={styles.caption}>Наименование товара 2</div>
                    </div>
                </Link>
                <Link href="/">
                    <div className={styles.card}>
                        <Image src="/catalog/model_3.png" className={styles.img} alt='model' width={1480} height={2000} />
                        <div className={styles.caption}>Наименование товара 3</div>
                    </div>
                </Link>
                <Link href="/">
                    <div className={styles.card}>
                        <Image src="/catalog/model_4.png" className={styles.img} alt='model' width={1480} height={2000} />
                        <div className={styles.caption}>Наименование товара 4</div>
                    </div>
                </Link>
                <Link href="/">
                    <div className={styles.card}>
                        <Image src="/catalog/model_5.png" className={styles.img} alt='model' width={1480} height={2000} />
                        <div className={styles.caption}>Наименование товара 5</div>
                    </div>
                </Link>
                <Link href="/">
                    <div className={styles.card}>
                        <Image src="/catalog/model_6.png" className={styles.img} alt='model' width={1480} height={2000} />
                        <div className={styles.caption}>Наименование товара 6</div>
                    </div>
                </Link>
                <Link href="/">
                    <div className={styles.card}>
                        <Image src="/catalog/model_7.png" className={styles.img} alt='model' width={1480} height={2000} />
                        <div className={styles.caption}>Наименование товара 7</div>
                    </div>
                </Link>
                <Link href="/">
                    <div className={styles.card}>
                        <Image src="/catalog/model_8.png" className={styles.img} alt='model' width={1480} height={2000} />
                        <div className={styles.caption}>Наименование товара 8</div>
                    </div>
                </Link>
                <Link href="/">
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