import { useRef, useState } from 'react'

import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined'
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ListItem from '../listItem/ListItem'

import './list.scss'

export default function List({ list }) {
  const [isMoved, setIsMoved] = useState(false)
  const [slideNumber, setSlideNumber] = useState(0)

  const listRef = useRef()

  const handleClick = (direction) => {
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x - 50

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1)
      listRef.current.style.transform = `translateX(${230 + distance}px)`
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1)
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
    }
  }

  return (
    <div className="list">
      <span className="list-title">
        {list.title}
      </span>

      <div className="wrapper">
        <ArrowBackIosOutlinedIcon
          className="slider-arrow left"
          style={{
            display: !isMoved && "none"
          }}
          onClick={() => handleClick("left")}
        />

        <div className="container" ref={listRef}>
          {
            list.content.map((item, i) => (
              <ListItem
                key={item}
                index={i}
                item={item}
              />
            ))
          }
        </div>

        <ArrowForwardIosOutlinedIcon
          className="slider-arrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  )
}
