import Link from 'next/link';
import styles from './catalog.module.css'
import Image from 'next/image';
import List from './list';

export default function Page() {
  return (
    <>
      <div className={styles.description}>
        <div className={styles.desc_1row}>ВЫБЕРИ СВОЙ СТИЛЬ</div>
        <div className={styles.desc_2row}>Здесь представлен каталог самых разных ателье и дизайнеров.
            <br />
            Специальные коллекции одежды и аксессуаров от участников проекта Киберателье.</div>
        <div className={styles.header_photo}>
            <Image className={styles.image} src="/catalog/header_photo_background.jfif" width={3000} height={2000} alt='background'/>
        </div>
        <div className={styles.header_cubes}>
            <Image className={styles.image} src="/catalog/cubes.png" width={2000} height={1000} alt='cubes'/>
        </div>
        <div className={styles.header_small_cubes}>
            <Image className={styles.image} src="/catalog/small_cubes.png" width={2240} height={950} alt='small_cubes'/>
        </div>
      </div>
      <List/>
    </>
  );
}