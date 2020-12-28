import React, { useEffect } from 'react'

export const Message = () => {

  useEffect(() => {
    console.log('componente Montado')
    return () => {
      console.log('componente Desmontado')
      
    }
  }, [])



  return (
    <div>
      <h3>Eres Genial</h3>
    </div>
  )
}
