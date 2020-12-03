import React from 'react';
import '@testing-library/react'
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';


describe('Pruebas en <PrimeraApp.js />', () => {
  // test('debe mostrar el mensaje "Hola, soy Goku"', () => {
  //   const saludo = 'Hola, soy Goku'
  //   const wrapper = render( <PrimeraApp saludo={saludo}/>)
  //   expect( wrapper.getByText(saludo) ).toBeInTheDocument()
  // })

  test('Debe mostrar <PrimeraApp /> correctamente', () => {
    const saludo = 'Hola, soy Goku'
    const wrapper = shallow( <PrimeraApp saludo={ saludo }/>)
    expect( wrapper ).toMatchSnapshot()
  })

  test('debe de mostrar el subtítulo enviado por props', () => {
    const saludo = 'Hola, soy Goku'
    const subTitulo = 'Soy un subtitulo'
    const wrapper = shallow( 
      <PrimeraApp 
        saludo={ saludo }
        subtitulo={ subTitulo } 
      />)

      // shallow se comporta como document.querySelector('p')
      const textoParrafo = wrapper.find('p').text()
      console.log(textoParrafo)
      expect( textoParrafo ).toBe( subTitulo )
  
    })
  
  
  
  
})
