import { Box, Button } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom'


const NewsLists = ({start,end,type}) => {
    const [items, setItems] = React.useState([]);
    const [num,setNum] = React.useState(end);

     React.useEffect(() => {
        axios.get(`http://localhost:8000/articles?_start=${start}&_end=${end}`)
        .then((response) => {setItems(response.data)})
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
                    <div key={item.id} style={{background:"white",padding:"8px",margin:"8px 5px 0 5px",}}>
                        <Box style={{textDecoration:'none'}} component={Link} to={`/articles/${item.id}`}>
                            <h2 style={{color:"black"}}>{item.title}</h2>
                        </Box>
                    </div>
                ))
                break;
            default:
                template = null;
        }
        return template
    }
    

    return (
        <div>
            {newsRender(type)}
            <Button
                style={{ width: '100%', color: 'White', backgroundColor: 'blue', fontWeight: 'bold' }}
                onClick={() => request(start,num+2)}
            >
                Load More
            </Button>
        </div>
    )
}

export default NewsLists
