'use client'

import Link from 'next/link';
import styles from "./styles.module.css"
import Image from 'next/image';
import { usePathname  } from 'next/navigation';
import { useEffect, useState } from 'react';
//import Button from '@mui/material';

export default function CurLink() {
    const router = usePathname ();
    const [isCatalog, setIsCatalog] = useState(false);
    const [isContacts, setIsContacts] = useState(false);

    useEffect(() => {
        if (router == '/catalog') {
            setIsCatalog(true)
        }
        else{
            setIsCatalog(false)
        }
    
        if (router == '/contacts') {
            setIsContacts(true)
        }
        else {
            setIsContacts(false)
        }
    })
  
  return (
    <>
        <div className={styles.leftSide}>
            <Link href="/"><Image src="/layout/logo.svg" alt="logo" width={264} height={34} /></Link>
            <Link className={isCatalog ? styles.active : ''} href="/catalog">Каталог</Link>
            <Link href="https://cyber-brand.ru/o-proekte/">О проекте</Link>
            <Link className={isContacts ? styles.active : ''} href="/contacts">Контакты</Link>
        </div>
    </>
  );
}