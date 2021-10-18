import { useState, useEffect } from 'react'
import axios from 'axios'

import BackgroundImage from '../../images/matrix.jpg'
import MatrixImage from '../../images/SeekPng.com_matrix-png_2107842.png'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import { token } from '../../utils/constants'

import './featured.scss'

export default function Featured({ type }) {
  const [content, setContent] = useState({})

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token: token
          }
        })
        setContent(res.data[0])
      } catch (err) {
        console.log('ERROR', err);
      }
    }
    getRandomContent()
  }, [type])

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>
            {type === "movies" ? "Movies" : "Series"}
          </span>
          <select className="select" name="genre" id="genre">
            <option>Genre</option>
            {
              selectArrow.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))
            }
          </select>
        </div>
      )}

      <img src={BackgroundImage} alt="Background_Image" />

      <div className="info">
        <img src={MatrixImage} alt="Matrix_image" />

        <span className="desc">
          {content.desc}
        </span>

        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />

            <span>
              Play
            </span>
          </button>

          <button className="more">
            <InfoOutlinedIcon />

            <span>
              Info
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

const selectArrow = [
  "adventure", "comedy", "crime",
  "fantasy", "historical", "horror",
  "romance", "sci-fi", "thriller",
  "western", "animation", "drama",
  "documentary"
]
