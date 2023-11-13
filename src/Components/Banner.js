import { useEffect, useState } from 'react'
import './banner.css'
import axios from '../axios'
import {Api_key,imageUrl} from '../Constant/Constant'


function Banner(){
    const [movie, setMovie] = useState([])
useEffect(()=>{
    axios.get(`trending/all/week?api_key=${Api_key}&language=en-US`).then((responce)=>{
        console.log(responce.data.results[0])
        setMovie(responce.data.results[1])
    })
        
    },[])
    return(
        <div style={{backgroundImage:`url(${movie ?imageUrl+movie.backdrop_path : ""})`}}className="banner">
             <div className="content">
                <h1 className="title">{movie? movie.title : ""}</h1>
                <div className="btns">
                    <button className="button">play</button>
                    <button className="button">my list</button>
                    
                </div>
                <div className="description">
                    <p>{movie? movie.overview: ""}</p>
                </div>
             </div>
             <div className="fade">

             </div>
            
        </div>
    )
     
    }

export default Banner