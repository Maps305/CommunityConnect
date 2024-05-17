import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import classes from './hero.module.css'

const Hero = () => {
  const [type, setType] = useState("beach")
  const [location, setLocation] = useState("0")
  const [priceRange, setPriceRange] = useState("0")
  const navigate = useNavigate()

  const handleSearch = () => {
    // navigating to properties
    navigate(`/properties?type=${type}&Location=${Location}&priceRange=${priceRange}`)
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Let's find your dream place right now...</h2>
        <h5>Search our best selection of luxury real estate.</h5>
        <div className={classes.options}>
          <select onChange={(e) => setType(e.target.value)}>
            <option disabled>Select type</option>
            <option value="rural">Rural</option>
            <option value="urban">Urban</option>
            <option value="remote">Remote</option>
          </select>
          <select onChange={(e) => setPriceRange(e.target.value)}>
            <option disabled>Select Price Range</option>
            <option value="0">0-100,000</option>
            <option value="1">100,000-200,000</option>
            <option value="2">200,000-300,000</option>
            <option value="3">300,000-400,000</option>
            <option value="4">400,000-500,000</option>
          </select>
          <select onChange={(e) => setLocation(e.target.value)}>
            <option disabled>Select Location</option>
            <option value="0">Bulawayo</option>
            <option value="1">Harare</option>
            <option value="2">Kwekwe</option>
            <option value="3">Mutare</option>
            <option value="4">Victoria Falls</option>
            <option value="5">Zvishavane</option>
          </select>
          <AiOutlineSearch className={classes.searchIcon} onClick={handleSearch} />
        </div>
      </div>
    </div>
  )
}

export default Hero