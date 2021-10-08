import { Box } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';
import CardInfo from '../NewsLists/CardInfo';
import styles from './NewsVideos.module.css';

const NewsVideosTemplate = ({ videos, teams }) => {
    let video = videos;
    return (
        <div>
            {video && video.map((item, i) => {
                return (
                    <Box component={Link} to={`/videos/${item.id}`} key={i} style={{textDecoration: 'none'}}>
                        <div className={styles.Template_wrapper}>
                            <div
                                className={styles.left}
                                style={{ background:`url(/images/videos/${item.image})`}}
                            >

                                <div
                                    style={{ background:`url(/images/play.png)`}}
                                ></div>
                            </div>
                            <div className={styles.right}>
                                <CardInfo teams={teams} team={item.team} date={item.date} />
                                <h3>{item.title}</h3>
                            </div>
                        </div>
                    </Box>
                )
            })}
        </div>
    )
}

export default NewsVideosTemplate
