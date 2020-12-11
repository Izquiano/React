import React from "react";
import { shallow } from "enzyme";
import { GifGrid } from '../../components/GifGrid'
import { useFechGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas sobre el componente <GifGrid />', () => {
  const category = 'One Punch'
  
  test("Debe mostrar el componente correctamente", () => {

    useFechGifs.mockReturnValue({
      data: [],
      loading: true
    })
    const wrapper = shallow( <GifGrid category={ category }/>);
    expect(wrapper).toMatchSnapshot();
  });
  
  test('Debe de mostar items cuando se cargan imágenes useFetchGifs', () => {

    const gifs = [{
      id: 'ABC',
      url: 'http://locakhost/culaquier/cosa.jpg',
      title: 'cualquier cosa'
    }]
    
    useFechGifs.mockReturnValue({
      data: gifs,
      loading: false
    })
    
    const wrapper = shallow( <GifGrid category={ category }/>);

    expect( wrapper ).toMatchSnapshot( )
    
  })
  


})
