import React from 'react'
import { Link } from 'react-router-dom'
import classes from './popularProperties.module.css'
import img1 from '../../assets/rural.jpg'
import img2 from '../../assets/urban.jpg'
import img3 from '../../assets/remote1.jpeg'
import { useState } from 'react'
import { useEffect } from 'react'
import { request } from '../../util/fetchAPI'

const PopularProperties = () => {
  const [ruralProperties, setRuralProperties] = useState(0)
  const [urbanProperties, setUrbanProperties] = useState(0)
  const [remoteProperties, setRemoteProperties] = useState(0)

  useEffect(() => {
    const fetchPropertiesNumber = async() => {
      try {
         const data = await request('/property/find/types', 'GET')

         setRuralProperties(data.rural)
         setUrbanProperties(data.urban)
         setRemoteProperties(data.remote)
      } catch (error) {
        console.error(error)
      }
    }
    fetchPropertiesNumber()
  }, [])

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Different types of properties</h5>
          <h2>Best type of properties for you</h2>
        </div>
        <div className={classes.properties}>
          <Link to={`/properties?type=rural&continent=0&priceRange=1`} className={classes.property}>
            <img src={img1} />
            <div className={classes.quantity}>{ruralProperties}</div>
            <h5>Rural properties</h5>
          </Link>
          <Link to={`/properties?type=urban&continent=1&priceRange=1`} className={classes.property}>
            <img src={img2} />
            <div className={classes.quantity}>{urbanProperties}</div>
            <h5>Urban properties</h5>
          </Link>
          <Link to={`/properties?type=remote&continent=2&priceRange=1`} className={classes.property}>
            <img src={img3} />
            <div className={classes.quantity}>{remoteProperties}</div>
            <h5>Remote properties</h5>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PopularProperties