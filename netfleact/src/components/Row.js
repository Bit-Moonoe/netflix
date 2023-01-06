import axios from '../axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './Row.css'

const baseUrl = 'https://image.tmdb.org/t/p/original/';

const Row = (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchUrl);
            setMovies(request.data.results);
        }

        fetchData();
        console.log(movies);
    }, []);

  return (
    <div className='row'>
        {/* category title */}
        <h2>{props.title}</h2>
        {/* 여러 장의 영화 포스터 이미지들 */}
        <div className={'row__posters'}>
            {movies.map((movie) => 
                <img
                    key={movie.id} 
                    className={`row__poster ${props.isLargeRow && 'row__posterLarge'}`}
                    // row__poster row__posterLarge
                    src={`${baseUrl}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name}
                    />
            )}
        </div>
    </div>
  )
}

export default Row