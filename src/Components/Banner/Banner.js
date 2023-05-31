import React, { useEffect, useState } from 'react'
import './Banner.css';
import  axios from '../../Constants/axios'
import {API_KEY} from '../../Constants/const';
import { imageUrl } from '../../Constants/const';

function Banner() {
  const[movies,setMovie]=useState()
    useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
    setMovie(response.data.results[0])
    })
    },[])
    
  return (
    <div style={{backgroundImage:`url(${movies?imageUrl+movies.backdrop_path:""})`}}
    
    className='banner'>
        <div className='content'>
          <h1 className='title'>{movies ? movies.title:""}</h1>
           <div className='ban'>

            <button className='btn'>Play</button>
            <button className='btn '>My List</button>
        </div>

        <h1 className='desc'>{movies ? movies.overview:""}</h1>

            </div>
    <div className="fade"></div>
    </div>
  )
}

export default Banner
