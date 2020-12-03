const { shallow } = require("enzyme");
const { default: CounterApp } = require("../CounterApp");

describe("Pruebas en el <CounterApp />", () => {
  let wrapper = shallow(<CounterApp />);
  
  beforeEach(() => {

    wrapper = shallow(<CounterApp />);
    
  })

  test("debe mostrar el <CounterApp /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar el valor por defecto de 100", () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const counterText = wrapper.find("h2").text().trim();
    console.log(counterText);
    expect(counterText).toBe("100");
  });

  test("Debe incrementar con el botón +1", () => {
    const btn1 = wrapper.find("button").at(0).simulate("click");
    // console.log(btn1.html())
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("11");
  });

  test("Debe restar 1 con el botón -1", () => {
    const btn1 = wrapper.find("button").at(2).simulate("click");
    // console.log(btn1.html())
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("9");
  });



});
