import { Box,Button } from '@material-ui/core'
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NewsVideos.module.css'
import NewsVideosTemplate from './NewsVideosTemplate';

const NewsVideos = ({start,type,amount}) => {
    const [teams, setTeams] = React.useState([]);
    const [videos, setVideos] = React.useState([]);
    const [end, setEnd] = React.useState(start + amount);
    


    const request = (start,end) => {
        if (teams.length < 1) {
            axios.get('http://localhost:8000/teams')
        .then(res => setTeams(res.data))
        }
        axios.get(`http://localhost:8000/videos?_start=${start}&_end=${end}`)
            .then(res => setVideos([...videos, res.data]))
        // console.log(videos);
    }

    React.useEffect(() => {
        request(start,end)
    }, [])
    

    const renderVideos = (type) => {
       let template = null;

        switch (type) {
            case ('videos'):
                template = <NewsVideosTemplate videos={videos} teams={teams} />
                break;
            default:
                template = null;
        }

        return template
    }
    
    return (
        <div className={styles.wrapper}>
            <Box>
                <h3><strong style={{color:'black'}}>NBA</strong> Videos</h3>
            </Box>

            {renderVideos(type)}



            <Box component={Link} to="/articles">
                <Button
                style={{ width: '100%', color: 'White', backgroundColor: 'blue', fontWeight: 'bold' }}
            >
                Load More Videos
            </Button>
            </Box>
        </div>
    )
}

export default NewsVideos
