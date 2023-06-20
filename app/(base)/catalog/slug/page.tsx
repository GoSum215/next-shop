import Link from 'next/link';
import styles from './catalog-item.module.css'
import Image from 'next/image';
import ListPhoto from './listPhoto';

export default function Page() {
  return (
    <>
        <div className={styles.all}>
            <ListPhoto />

            <div className={styles.description}>
                <div className={styles.back}>
                    <Link href="/catalog"> Вернуться в каталог</Link>
                </div>
                <div className={styles.name}>ПЛАТЬЕ GORANSKAYA L</div>
                <div className={styles.desc}>
                    Платье выполнено в сочетании морского и спортивного стиля. Широкие трикотажные брюки, красно-белая тельняшка с вышивкой-аппликацией «Тигр» и жилет из трикотажного полотна дополняет образ и подчеркивает Приморский характер.
                </div>
                <div className={styles.ar_button}>
                    <Link href="/">СМОТРЕТЬ в AR</Link>
                </div>
                <div className={styles.horizontal_line}></div>
                <div className={styles.designer}>О ДИЗАЙНЕРЕ И БРЕНДЕ</div>
                <div className={styles.info}>Горанская Людмила – дизайнер одежды, модельер-конструктор, победитель и участник многих международных конкурсов дизайнеров одежды (Германия, Китай, Россия).</div>
                <div className={styles.link_telegram}>
                    <Link href="#">TELEGRAM ДИЗАЙНЕРА</Link>
                </div>
                <div className={styles.info}>Локальный бренд авторской одежды Горанская Людмила (Goranskaya L) - это сохранение национальных, региональных и имиджевых компонентов через визуализацию и айдентику Приморского края. Здесь рождается одежда с приморским характером, пронизанная духом свободы. Это не просто одежда, это отражение характера, стиля и даже настроения. Часто используем символику Владивостока и Приморского края разрабатываем принты и наносим их на одежду в технике вышивки аппликации. Одежда создается небольшим количеством прямо в студии, без фабрик и массовых потоков.
                    Необычные формы, качественные ткани, принты, разработанные и выполненные вручную – можно не сомневаться, что Ваш образ будет неповторим.
                </div>
            </div>
        </div>
    </>
  );
}