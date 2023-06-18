'use client'

import Link from 'next/link';
import styles from "./styles.module.css"
import Image from 'next/image';
//import Button from '@mui/material';

export default function Slider() {
  function nextDres(){
    if (typeof window !== 'undefined') {
      let radios = document.querySelectorAll('input[type="radio"]');
      let radiosLen = radios.length;
      let value = 0;
      for (let radio of radios) {
        if (radio.checked) {;
          value = radio.value;
          radio.checked = false;
        }
      }
      value++;
      if(value > radiosLen){
        value = 1;
      }
      for (let radio of radios) {
        if(radio.value == value){
          radio.checked = true;
          if(radio.value == 1){
            document.getElementById("s1").style.marginLeft = '0';
          }
          else if(radio.value == 2){
            document.getElementById("s1").style.marginLeft = '-25%';
          }
          else if(radio.value == 3){
            document.getElementById("s1").style.marginLeft = '-50%';
          }
          else if(radio.value == 4){
            document.getElementById("s1").style.marginLeft = '-75%';
          }
        }
      }       
    }
  }

  function prevDres(){
    if (typeof window !== 'undefined') {
      let radios = document.querySelectorAll('input[type="radio"]');
      let radiosLen = radios.length;
      let value = 0;
      for (let radio of radios) {
        if (radio.checked) {;
          value = radio.value;
          radio.checked = false;
        }
      }
      value--;
      if(value == 0){
        value = radiosLen;
      }
      for (let radio of radios) {
        if(radio.value == value){
          radio.checked = true;
          if(radio.value == 1){
            document.getElementById("s1").style.marginLeft = '0';
          }
          else if(radio.value == 2){
            document.getElementById("s1").style.marginLeft = '-25%';
          }
          else if(radio.value == 3){
            document.getElementById("s1").style.marginLeft = '-50%';
          }
          else if(radio.value == 4){
            document.getElementById("s1").style.marginLeft = '-75%';
          }             
        }
      }       
    }
  }
  
  return (
    <>
      <div className={styles.catalogue}>
            <div className={styles.rectangle}>
                <div className={styles.arrowHolder}>
                    <div className={styles.button + ' ' + styles.prev_button} onClick={prevDres}>
                        <i className={styles.arrow + ' ' +  styles.left}></i>
                    </div>
                    <div className={styles.slides_container}>

                        <input className={styles.input} type="radio" name="r" id="dress1" value="1" checked />
                        <input className={styles.input} type="radio" name="r" id="dress2" value="2" />
                        <input className={styles.input} type="radio" name="r" id="dress3" value="3" />
                        <input className={styles.input} type="radio" name="r" id="dress4" value="4" />


                    <div className={styles.dres_imgs}>
                        <div className={styles.slide_image} id="s1">
                            <Image src="layout/model.svg" alt="1" width={1} height={1}/>
                            <p>RN</p>
                        </div>
                        <div className={styles.slide_image}>
                            <Image src="layout/model2.svg" alt="2" width={1} height={1} />
                            <p>Hello</p>
                        </div>
                        <div className={styles.slide_image}>
                            <Image src="layout/model3.svg" alt="3" width={1} height={1} />
                            <p>akulina irina kid's outfit</p>
                        </div>
                        <div className={styles.slide_image}>
                            <Image src="layout/image4.svg" alt="4" width={1} height={1} />
                            <p> 4</p>
                        </div>
                    </div>
                    <Link className={styles.catBtn} href='/catalog'>
                      <button className={styles.catBtn}>перейти</button>
                    </Link>
                  </div>
                  <div className={styles.button + ' ' +  styles.next_button} onClick={nextDres}>
                      <i className={styles.arrow + ' ' +  styles.right}></i>
                  </div>
                </div>
            </div>
            <div className={styles.catMobile}>перейти</div>
        </div>
    </>
  )
}