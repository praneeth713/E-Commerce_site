import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollection from '../Components/NewCollections/NewCollection'
import NewsLetter from '../Components/NewLetter/NewsLetter'
const Shop = () => {
  return (
    <div>
      <Hero/><br/>
      <Popular/><br/>
      <Offers/>
      <NewCollection/><br/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
