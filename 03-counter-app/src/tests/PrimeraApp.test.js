import React from 'react';
import { render } from '@testing-library/react'
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
  
  
})
