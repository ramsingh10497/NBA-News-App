import React from 'react';
import axios from 'axios';
import styles from '../../NewsArticles.css';
import Header from './Header';
import Body from './Body';


const NewsArticles = (props) => {
    const [articles, setArticles] = React.useState([]);
    const [team, setTeam] = React.useState([]);

    
    
    const request = () => {
            
        axios.get(`http://localhost:8000/articles?id=${props.match.params.id}`)
            .then(res => {
                
                setArticles(...res.data)
                let temp = res.data[0];
               
                
                axios.get(`http://localhost:8000/teams?id=${temp.team}`)
                    .then(res => {
               
                        setTeam(...res.data)
                    })
            })
    }

    React.useEffect(() => {
        request()
    }, [])

    return (
        <div>
            <Header
                teamdata={team}
                date={articles.date}
                author={articles.author}
            />
            <Body />
        </div>
    )
}

export default NewsArticles
