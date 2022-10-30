import Image from "next/image";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

var style ={
    controlArrow :{
        top: 0,
        color:'#fff',
        fontSize:'20px',
        bottom: '0',
        marginTop: '12.5%',
        padding:'5px',
        borderRadius: '50%',
        height:'35px',
        width:'35px',
        backgroundColor:'#000',
        position:'absolute',
    },
}
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel showThumbs={false}>
                <div>
                    <Image width="768" height="274" alt="doctor image" src="/image/carousel/1.jpg" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <Image width="768" height="274" alt="chiropractor image" src="/image/carousel/2.jpg" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                
                
            </Carousel>
        );
    }
};

export default DemoCarousel;

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>