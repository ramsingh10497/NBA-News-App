import React from 'react';
import { Link } from 'react-router-dom';
import Slick from 'react-slick';
import styles from './slider.module.css';

const SliderTemplate = ({data,type}) => {

    let template = null;

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    switch (type) {
        case ('featured'): {
            template = data.map((item, i) => {
                return (
                    <div key={i}>
                        <div className={styles.items}>
                            <div className={styles.images}
                                style={{ background:`url(../images/articles/${item.image}`}}
                            ></div>
                            <Link to={`/articles/${item.id}`}>
                                <div className={styles.caption}>
                                    {item.title}
                                </div>
                            </Link>
                        </div>
                    </div>
                    )
                })
            break
        }
        default:
            template = null;
    }

    return (
        <Slick
            {...settings}
        >
            {template}
        </Slick>
    )
}

export default SliderTemplate
