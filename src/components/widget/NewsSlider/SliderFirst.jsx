import React from 'react'
import SliderTemplate from './SliderTemplate';
import axios from 'axios';

const SliderFirst = ({type,start,end}) => {

     const [news, setNews] = React.useState([]);

    React.useEffect(() => {
        axios.get(`http://localhost:8000/articles?_start=${start}&_end=${end}`)
        .then((res)=> setNews(res.data))
    }, [])
    console.log(news);
    return (
        <div>
           <SliderTemplate data={news} type={type} />
        </div>
    )
}

export default SliderFirst

