import { Box, Typography } from '@material-ui/core'
import React from 'react'
import SliderFirst from '../widget/NewsSlider/SliderFirst'

function Home() {
   
    return (
        <div>
            <SliderFirst type="featured" start={1} end={4} />

        </div>
    )
}

export default Home
