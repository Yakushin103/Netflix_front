import { useState, useEffect } from 'react'
import axios from 'axios'

import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'

import './home.scss'

const Home = ({ type }) => {
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)

  useEffect(() => {
    const getRandonList = async () => {
      try {
        const res = await axios.get(
          `lists${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`, {
          headers: {
            token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmFkMmZiNmFlNzNkODdhZTVjMWQ0MSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzQzOTA5NTIsImV4cCI6MTYzNDgyMjk1Mn0.ATUakv9DOo-5yChoyQ_AiKPWq0YbogPO7Qr7P5c-b2k'
          }
        }
        )
        setLists(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getRandonList()
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

