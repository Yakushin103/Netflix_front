import BackgroundImage from '../../images/matrix.jpg'
import MatrixImage from '../../images/SeekPng.com_matrix-png_2107842.png'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'

import './featured.scss'

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>
            {type === "movie" ? "Movies" : "Series"}
          </span>
          <select className="select" name="genre" id="genre">
            <option>Genre</option>
            {
              selectArrow.map(item => (
                <option value={item}>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tempora, odio corrupti quis quisquam earum voluptatum?
          Accusamus cumque soluta totam aperiam nemo est sunt,
          quae minus eveniet natus laborum quaerat quos.
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
