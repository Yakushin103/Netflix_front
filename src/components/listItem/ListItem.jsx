import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import AddIcon from '@material-ui/icons/Add'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined'
import NewFilmImage from '../../images/new_film.jpg'
import { token } from '../../utils/constants'

import './listItem.scss'

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false)
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`/movies/find/${item}`, {
          headers: {
            token: token
          }
        })
        setMovie(res.data)
      } catch (err) {
        console.log('ERROR', err)
      }
    }
    getMovie()
  }, [item])

  return (
    <NavLink to={{ pathname: "/watch", movie: movie }}>
      <div
        className="listItem"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      >
        <img src={NewFilmImage} alt="New_Film" />
        {
          isHovered && (
            <>
              {/* <video
              src={trailer}
              autoPlay={true}
              loop
            /> */}

              <iframe
                src="https://www.youtube.com/embed/bZOHmDYCo2I?controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; 
              autoplay; 
              clipboard-write; 
              encrypted-media; 
              gyroscope; 
              picture-in-picture"
                allowFullScreen>

              </iframe>

              <div className="item-info">
                <div className="icons">
                  <PlayArrowIcon className="icon" />

                  <AddIcon className="icon" />

                  <ThumbUpAltOutlinedIcon className="icon" />

                  <ThumbDownOutlinedIcon className="icon" />
                </div>

                <div className="item-info-top">
                  <span> {movie.duration} </span>

                  <span className="limit"> {movie.limit} </span>

                  <span> {movie.year} </span>
                </div>

                <div className="desc">
                  {movie.desc}
                </div>

                <div className="genre">
                  {movie.genre}
                </div>
              </div>
            </>
          )
        }
      </div>
    </NavLink>
  )
}
