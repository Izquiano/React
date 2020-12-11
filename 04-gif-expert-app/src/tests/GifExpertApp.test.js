import React from 'react'
import GiftExpertApp from '../GifExpertApp'
import { shallow } from "enzyme";


describe('Pruebas sobre el componente <GiftExpertApp />', () => {
  test('debe mostrar el componente de manera correcta ', () => {
    const wrapper = shallow(<GiftExpertApp  />);
    expect(wrapper).toMatchSnapshot();
  })
  test('Debe dde mostrar una lista de categorias', () => {

    const categories = ['One punch', 'Dragon ball']
    const wrapper = shallow(<GiftExpertApp defaultCategories={ categories } />);

    expect( wrapper ).toMatchSnapshot()
    expect( wrapper.find('GifGrid').length ).toBe( categories.length )

    
  })
  
  
})




