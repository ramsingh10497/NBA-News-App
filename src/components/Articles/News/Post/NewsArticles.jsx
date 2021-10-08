import React from 'react';
import axios from 'axios';
import styles from '../../NewsArticles.css';


const NewsArticles = (props) => {
    const [articles, setArticles] = React.useState([]);
    const [team, setTeam] = React.useState([]);
    const request = () => {
            
        axios.get(`http://localhost:8000/articles?id=${props.match.params.id}`)
            .then(res => {
                setArticles(...res.data)
            })

        axios.get(`http://localhost:8000/teams?id=${articles.team}`)
        .then(res => setTeam(res.data))
    }

    React.useEffect(() => {
        request()
    }, [])

    
    return (
        <div>
            NewsArticles
        </div>
    )
}

export default NewsArticles