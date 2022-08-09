import React ,{useEffect, useState} from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import styled from 'styled-components';

const FeaturedItems = styled.div`
    margin: auto;
    width:100%;
    padding:0.5rem;
    color:black;
    font-size: large;
    font-size:15px;
    text-align: bottom;
`
const FeaturedHeader = styled.div`
    font-weight: bold;
    font-size:20px;
    margin: 0 0.5rem;
`
function Featured() {


  return (
    <div>
        <FeaturedHeader>Featured On Uber Eats</FeaturedHeader>
        
        <FeaturedItems>
            <Splide aria-label="My Favorite Images"
                options={{
                    perPage:1,
                    arrows: true,                
                    rewind:true,
                    height:'100%'
                   
                }}
            >
                 <SplideSlide>
                    <img src='featured/wendys.jpg' alt="wendys"/>
                    <div>
                        <span>
                        Wendy's (3615 St Clair Ave E)
                        </span>
                        <span>
                            4.7
                        </span>
                    </div>
                    <div>
                        <span>$0.99 Delivery Fee</span>
                        <span>60-75 min</span>
                    </div>                  
                </SplideSlide>
                <SplideSlide>
                    <img src='featured/osmows.jpg' alt="osmows"/>
                    <div>
                        <span>
                        Wendy's (3615 St Clair Ave E)
                        </span>
                        <span>
                            4.7
                        </span>
                    </div>
                    <div>
                        <span>$0.99 Delivery Fee</span>
                        <span>60-75 min</span>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <img src='featured/sushi_legend.jpg' alt="sushi legend"/>
                    <div>
                        <span>
                        Wendy's (3615 St Clair Ave E)
                        </span>
                        <span>
                            4.7
                        </span>
                    </div>
                    <div>
                        <span>$0.99 Delivery Fee</span>
                        <span>60-75 min</span>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <img src='featured/mcdonalds.jpg' alt="mcdonalds"/>
                    <div>
                        <span>
                        Wendy's (3615 St Clair Ave E)
                        </span>
                        <span>
                            4.7
                        </span>
                    </div>
                    <div>
                        <span>$0.99 Delivery Fee</span>
                        <span>60-75 min</span>
                    </div>
                </SplideSlide>
            </Splide>
        </FeaturedItems> 

    </div>
  )
}

export default Featured