import React from 'react';
import styles from './cardinfo.module.css'

const CardInfo = ({ team, teams, date }) => {
    
    const nameRender = (team,teams) => {

        let data = teams.filter((item) => {
            return item.id === team
        });
        if (data.length>0) {
            return data[0].name;
        }
    }


    return (
        <div className={styles.cardinfo}>
            <span className={styles.teamname}>
                {nameRender(team, teams)}
            </span>
            <span className={styles.date}>
                {date}
            </span>
        </div>
    )
}

export default CardInfo
