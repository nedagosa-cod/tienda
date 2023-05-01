import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import style from './carousel.module.css'
import carousel_1 from '../../img/carousel_1.png'
import carousel_2 from '../../img/carousel_2.jpg'

export default function SliderImages(props)
{
    let items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image: carousel_1
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image: carousel_2
        }
    ]

    return (
        <Carousel className={style.carousel}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper >
            <figure>
                <img src={props.item.image} alt="carousel"/>
            </figure>
        </Paper>
    )
}