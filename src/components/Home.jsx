import React from 'react'
import { StateContextCustom } from '../context/StateContext'
import CountryCard from './CountryCard';

const Home = () => {
  const {state:{countryLists}} = StateContextCustom();
  console.log(countryLists)
  return (
    <div className='flex gap-5 flex-wrap justify-center my-4'>
      {countryLists.map((item) => {
        return(<CountryCard key={item.name.common} {...item}/>)
      })}
      
    </div>
  )
}

export default Home