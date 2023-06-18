import Link from 'next/link';
import styles from "./styles.module.css"
import Slider from "./slider"

export default function Page() {
    return (
        <>
            <div className={styles.banner}>  {/*style={{backgroundImage: `url("/layout/banner.svg")`}}*/}
                <div className={styles.bannerContent}>
                    <p>Каталог-витрина<span className={styles.bannerText1}> специальных коллекций</span><span className={styles.bannerText2}> от Fashion-дизайнеров и брендов</span></p>
                    <Link className={styles.bannerBtn} href='/catalog'>Перейти к каталогу</Link>
                </div>
            </div>
            <div className={styles.divide}></div>
            <div className={styles.info}>
                <div className={styles.infoText}>
                    <p className={styles.bold}>В Приморье официально запустили стратегическую программу «Киберателье и креативные индустрии Приморья».</p>
                    <p>Ведомственный проект, рассчитанный до 2030 года, по оценке экспертов, поможет не только перевести легкую промышленность края на новый уровень, но и оказать существенное воздействие на экономику региона в целом.</p>
                </div>
            </div>
            <div className={styles.new}>
                <h1>Новинки каталога</h1>
            </div>
            <Slider/>
        </>
    );
}


