import React ,{useEffect, useState} from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import styled from 'styled-components';

const Cat = styled.div`
    margin:auto;
    padding:5px;
    width:100%;
    height:100%;
    font-size:9px;
    text-align: center;
    background-color: #d6dee6;
`

function Categories() {
   

    const [width,setWidth] = useState(0);
    const [resize, setResize] = useState(false);

    useEffect(()=>{
        setResize(false);
        setWidth(window.innerWidth);
        console.log(width) 
    },[resize])

    window.onresize = resizeReport;

    function resizeReport(){
        setResize(true);
    }

    return (
        <Cat>
            <Splide aria-label="Categories"
                options={{
                    perPage:7,
                    arrows: false,
                    height:'5rem',
                    rewind:true,
                    gap:'1.5rem'
                }}
            >            
                <SplideSlide>
                    <img src='icons/0.png' alt="1"/>
                    <p>Deals</p>
                </SplideSlide>
                <SplideSlide>
                    <img src='icons/1.png' alt="1"/>
                    <p>Grocery</p>
                </SplideSlide>
                <SplideSlide>
                    <img src='icons/2.png' alt="1"/>
                    <p>Convenience</p>
                </SplideSlide>
                <SplideSlide>
                    <img src='icons/3.png' alt="1"/>
                    <p>Alcohol</p>
                </SplideSlide>
                <SplideSlide>
                    <img src='icons/4.png' alt="1"/>
                    <p>Pharmacy</p>
                </SplideSlide>
                <SplideSlide>
                    <img src='icons/5.png' alt="1"/>
                    <p>Baby foods</p>
                </SplideSlide>
                <SplideSlide>
                    <img src='icons/6.png' alt="1"/>
                    <p>Pet supplies</p>
                </SplideSlide>
                <SplideSlide>
                    <img src='icons/7.png' alt="1"/>
                    <p>Coffee</p>
                </SplideSlide>
                <SplideSlide>
                    <img src='icons/8.png' alt="1"/>
                    <p>Fast food</p>
                </SplideSlide>
                <SplideSlide>
                    <img src='icons/9.png' alt="1"/>
                    <p>Healthy</p>
                </SplideSlide>
                <SplideSlide>
                    <img src='icons/10.png' alt="1"/>
                    <p>Sandwich</p>
                </SplideSlide>
                <SplideSlide>
                    <img src='icons/11.png' alt="1"/>
                    <p>Flowers</p>
                </SplideSlide>                              
            </Splide>
        </Cat>
  )
}

export default Categories