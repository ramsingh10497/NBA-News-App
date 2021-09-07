import React from 'react'
import SliderTemplate from './SliderTemplate';
import axios from 'axios';

const SliderFirst = () => {

     const [news, setNews] = React.useState([]);

    React.useEffect(() => {
        axios.get(`http://localhost:8000/articles`)
        .then((res)=> setNews(res.data))
    }, [])
    console.log(news);
    return (
        <div>
           <SliderTemplate data={news} type='featured' />
        </div>
    )
}

export default SliderFirst

