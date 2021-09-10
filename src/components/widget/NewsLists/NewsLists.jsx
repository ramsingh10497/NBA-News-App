import { Box, Button } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CardInfo from './CardInfo';
import styles from './NewsLists.css'


const NewsLists = ({start,end,type}) => {
    const [items, setItems] = React.useState([]);
    const [num, setNum] = React.useState(end);
    const [teams,setTeams] = React.useState([]);

     React.useEffect(() => {
        axios.get(`http://localhost:8000/articles?_start=${start}&_end=${end}`)
            .then((response) => { setItems(response.data) })
         
         axios.get(`http://localhost:8000/teams`)
             .then((response) => { setTeams(response.data) })
       
    }, [])

    const request = (a, b) => {
        setNum(num+2)
       axios.get(`http://localhost:8000/articles?_start=${a}&_end=${num}`)
        .then((response) => {setItems(response.data)})
    }
    
    const newsRender = (type) => {
        let template = null;
        switch (type) {
            case ("lists"):
                template = items && items.map((item) => (
                    <CSSTransition
                        key={item.id}
                        classNames={{
                            enter: styles.wrapper,
                            enterActive: styles.wrapper_enter
                        }}
                        timeout={500}
                    >
                        <div style={{ background: "white", padding: "8px", margin: "8px 5px 0 5px", }}>
                            <CardInfo team={item.team} teams={teams} date={item.date} />
                        <   Box style={{textDecoration:'none'}} component={Link} to={`/articles/${item.id}`}>
                            <h2 style={{color:"black"}}>{item.title}</h2>
                            </Box>
                        </div>
                    </CSSTransition>
                ))
                break;
            default:
                template = null;
        }
        return template
    }
    

    return (
        <div>
            <TransitionGroup
                component="div"
                className="list"
            >
                {newsRender(type)}
            </TransitionGroup>
           <Button
                style={{ width: '100%', color: 'White', backgroundColor: 'blue', fontWeight: 'bold' }}
                onClick={() => request(start,num+2)}
            >
                Load More News
            </Button>
        </div>
    )
}

export default NewsLists
