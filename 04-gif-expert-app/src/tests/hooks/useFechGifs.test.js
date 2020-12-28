
import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'


describe('Pruebas en el custom Hooh useFetchGifs', () => {
  
  test('Debe de retornar el estado inicial', () => {

    const { result } = renderHook( () => useFetchGifs('one punch') )
    const { data, loading } = result.current
    
    // const { data, loading } = useFetchGifs('one punch');

    console.log( data, loading )
  })
  
})
 