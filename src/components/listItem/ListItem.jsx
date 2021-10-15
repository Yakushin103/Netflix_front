import { useState } from 'react'

import NewFilmImage from '../../images/new_film.jpg'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import AddIcon from '@material-ui/icons/Add'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined'

import './listItem.scss'

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false)
  const trailer = "https://youtu.be/ZPUM1L8iwtc"

  return (
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
                <span>1 hour 14 mins</span>

                <span className="limit">+16</span>

                <span>2021</span>
              </div>

              <div className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis nulla ipsam ipsa, totam cumque harum quisquam.
              </div>

              <div className="genre">
                Action
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}
