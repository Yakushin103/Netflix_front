import { useState, useEffect } from 'react'
import axios from 'axios'

import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'

import { token } from '../../utils/constants'

import './home.scss'

const Home = ({ type }) => {
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `lists${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`, {
          headers: {
            token: token
          }
        }
        )
        setLists(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getRandomList()
  }, [type, genre])

  return (
    <div className="home">
      <Navbar />

      <Featured
        type={type}
      />
      {
        lists.map(list => (
          <List
            key={list._id}
            list={list}
          />
        ))
      }
    </div>
  )
}

export default Home

