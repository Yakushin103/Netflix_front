import { NavLink, useLocation } from 'react-router-dom'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import './watch.scss'

export default function Watch() {
  const location = useLocation()

  console.log('location', location);

  return (
    <div className="watch">
      <NavLink to="/" className="link">
        <div className="back">
          <ArrowBackIcon />
          Home
        </div>
      </NavLink>

      <iframe
        className="video"
        src="https://www.youtube.com/embed/bZOHmDYCo2I?controls=0"
        title="YouTube video player"
        frameBorder="0"
        loading="lazy"
        allow="accelerometer; 
              autoplay; 
              controls=1;
              clipboard-write; 
              encrypted-media; 
              gyroscope; 
              picture-in-picture"
        allowFullScreen>
      </iframe>
    </div>
  )
}
