import axios from 'axios';
import React, {useState,useEffect} from 'react'

const Sliderfirst = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/articles`)
        .then(res=> setNews(res.data))
    },[])

    return (
        <div>
            Slider
        </div>
    )
}

export default Sliderfirst
