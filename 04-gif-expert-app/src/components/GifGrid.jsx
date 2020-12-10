import React from 'react'
import { useFechGifs } from '../hooks/useFetchGifs'

import { GifGridItem } from './GifGridItem'

export const GifGrid = ( {category} ) => {

  

  const { data: images, loading } = useFechGifs( category )

  // useEffect( ()=> {
  //   getGifs( category )
  //   .then( imgs => setImages( imgs ))
  // }, [ category ] )

  

  return (
    <>
    <h3>{ category }</h3>
    {loading && <p>Loading...</p> }
  

    <div className="card-grid">
           
       {
         images.map( el => {
           return (
            <GifGridItem 
              key={ el.id } 
              { ...el }
            />
           )
         })
       }
       
    
    </div>
    </>
  )
}
