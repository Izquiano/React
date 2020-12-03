const { shallow } = require("enzyme")
const { default: CounterApp } = require("../CounterApp")

describe('Pruebas en el <CounterApp />', () => {
  

  test('debe mostrar el <CounterApp /> correctamente', () => {
    
    const wrapper = shallow( <CounterApp />)
    expect( wrapper ).toMatchSnapshot() 
    
    
  })
  
  test('debe mostrar el valor por defecto de 100', () => {
    const wrapper = shallow( <CounterApp value={100}/>)
    const counterText = wrapper.find('h2').text().trim()
    console.log(counterText)
    expect( counterText ).toBe('100')
  })
  
  
})
