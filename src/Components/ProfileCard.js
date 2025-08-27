import React from 'react'
import styles from "./Profile.module.css"

function ProfileCard() {
    function handleClick(){
     alert("you followed alia")   
    }
  return (
    <div>
        <div className={styles.card}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/1/10/Alia_Bhatt_at_Berlinale_2022_Ausschnitt.jpg' className={styles.img}></img>
          <p className={styles.name}>Hey! I am Alia</p>
          <p className={styles.details}>I am an Actor,director and an influencer if you like me - dont forget to click follow button</p>
          <div className={styles.buttonDiv}>
          <button className={styles.follow} onClick={handleClick}>follow<span className={styles.followSpan}>+</span></button>
          </div> 
        </div>
    </div>   
  ) 
}

export default ProfileCard
