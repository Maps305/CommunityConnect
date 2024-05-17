import React, { useEffect, useState } from 'react';
import classes from './featuredProperties.module.css';
import { Link } from 'react-router-dom';
import img from '../../assets/estate.png';
import person from '../../assets/person.png';
import { FaBed, FaSquareFull } from 'react-icons/fa';

const FeaturedProperties = () => {
  const [featuredProperties, setFeaturedProperties] = useState([])

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const data = await requestAnimationFrame('/property/find/featured', 'GET')
        setFeaturedProperties(data)
        // console.log(data)
      } catch (error) {
        console.error(error.message)
      }
    }
    fetchFeatured()
  }, [])

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Properties you may like...</h5>
          <h2>Featured Properties</h2>
        </div>
      </div>
      <div className={classes.featuredProperties}>
        {featuredProperties?.map((property) => (
          <div key={property._id} className={classes.featuredProperty}>
            <Link to={`/propertyDetail/${property._id}`} className={classes.imgContainer}>
              <img src={`http://localhost:5000/images/${property?.img}`} alt='featured por' />
              <img src={img} alt='featured por' />
            </Link>
            <div className={classes.details}>
              <span className={classes.price}>$ {property?.price}</span>
              <img src={person} alt="owner" className={classes.owner} />
            </div>
            <div className={classes.moreDetails}>
              <span>{property?.beds} beds <FaBed className={classes.icon} /></span>
              <span>{property?.sqmeters} square meters <FaSquareFull className={classes.icon} /></span>
            </div>
            <div className={classes.desc}>
              {property.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProperties
