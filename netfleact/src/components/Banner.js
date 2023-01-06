import React, { useState, useEffect } from 'react'
import './Banner.css'
import axios from '../axios';
import requests from '../requests';

const Banner = () => {
    const [movie, setMovie] = useState([]);
    useEffect(()=>{
        //화면이 초기에 랜더링된 직후 한 번 호출
        //APi 서버에 데이터 요청하는 부분

        async function fetchData(){
            //비동기 요청으로 받아온 응답 데이터

            const request = await axios.get(requests.fetchNetflixOriginals);

            console.log(request);
            const randomMovie = request.data.results[0];
            setMovie(randomMovie);
        }
        fetchData();
    }, []);

    return (
        <header className='banner' style = {{
            backgroundSize : "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            backgroundPosition: "center center"
        }}>
            {/* Background Image */}
            <div className='banner__contents'>
                <h1 className='banner__title'>{movie?.title||movie.name}</h1>

                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My list</button>

                </div>

                {/* decription */}
                <h1 className='banner__description'>
                    {movie?.overview}
                </h1>
            </div>
            <div className='banner--fadeBottom'></div>
        </header>
    )
}

export default Banner