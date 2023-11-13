import React, { useEffect } from 'react'
import './RawPost.css'
import { imageUrl } from '../../Constant/Constant'
import axios  from '../../axios'
import { useState } from 'react'
import YouTube from "react-youtube";
function RawPost(probs) {
  const [movies, setMovie] = useState([])
  const [id, setId] = useState([])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  useEffect(() => {
    axios.get(probs.url).then((responce)=>{
      console.log(responce.data)
      setMovie(responce.data.results)
    }).catch(err=>{
      alert('network error')
    })
   
  }, [])
   const handleMovie=(id)=>{

    console.log(id)
    setId(id)

  }
  return (
    <div className='row'>
      <h2>{probs.title}</h2>
      <div className='posters'>
      {movies.map((obj)=>
          <img onClick={(()=>{
            handleMovie(obj.id)
          })} className={probs.isSmall ? 'SmallPoster' :'poster'}src={`${imageUrl+obj.backdrop_path}`}alt="poster" />

          )}
        
      
      </div>
      <YouTube videoId="id" opts={opts}  />

    </div>
  )
}

export default RawPost
