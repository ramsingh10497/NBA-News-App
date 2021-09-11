import { Box, Typography } from '@material-ui/core'
import React from 'react'
import NewsLists from '../widget/NewsLists/NewsLists'
import SliderFirst from '../widget/NewsSlider/SliderFirst'
import NewsVideos from '../widget/NewsVideos/NewsVideos'

function Home() {
   
    return (
        <div>
            <SliderFirst type="featured" start={1} end={4} />
            <NewsLists type="lists" start={3} end={6} />
            <NewsVideos type="videos" start={0} amount={3} />
        </div>
    )
}

export default Home
