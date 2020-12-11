import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en el componente <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach( () => {
    jest.clearAllMocks()
    wrapper = shallow(<AddCategory setCategories={setCategories} />);

  })

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";
    input.simulate("change", { target: { value } });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test('No debe de postear la información con submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} })
    expect( setCategories ).not.toHaveBeenCalled()
  })

  test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
    const value = "Hola mundo";
    const input = wrapper.find("input");
    input.simulate("change", { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault(){} })
    
    // Se espera que haya sido llamdo
    expect( setCategories ).toHaveBeenCalled()
    // Se espera que haya sido llamado una vez
    expect( setCategories ).toHaveBeenCalledTimes( 1 )
    // Se espera que haya sido llamado con una función
    expect( setCategories ).toHaveBeenLastCalledWith( expect.any(Function) )

    expect( input.text() ).toBe( '' )
  })
  
  
});
