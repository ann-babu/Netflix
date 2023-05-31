import React, { useEffect, useState } from 'react'
import './Row.css'
import YouTube from 'react-youtube'
import axios from '../../Constants/axios'
import {imageUrl,API_KEY} from '../../Constants/const'
function Row(props) {
    const[movies,setMovie]=useState([])
    const[id,setId]=useState('')
    useEffect(()=>{
        axios.get(props.url).then(response=>{
            console.log(response.data)
            setMovie(response.data.results)

        })
     })
    
     const opts = {
        height: '390',
        width:'100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      }; 

      const handle=(id)=>{
      console.log(id)
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        if(response.data.results.length!==0){
            setId(response.data.results[0])
        }
        else{
            console.log('empty')
        }

      })
      }
  return (
   
 
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="post">
          
           {
            movies.map((obj)=>{
                return(
                <img onClick={()=>{handle(obj.id)}} className={props.isSmall ? 'small':'pimg'} src={`${imageUrl+obj.backdrop_path}`} alt='imagepost' />

             ) })
           }
            
        </div>
      { id&& <YouTube opts={opts} videoId={id.key}  /> }
      
    </div>
  )
}

export default Row
