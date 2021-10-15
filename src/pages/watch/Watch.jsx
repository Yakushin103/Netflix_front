import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import './watch.scss'

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackIcon />

        Home
      </div>

      <iframe
        className="video"
        src="https://www.youtube.com/embed/bZOHmDYCo2I?controls=0"
        title="YouTube video player"
        frameBorder="0"
        loading = "lazy"
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
