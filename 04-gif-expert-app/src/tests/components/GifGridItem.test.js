import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem />", () => {
  const title = "Un título";
  const url = "https://localhost/algo.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de tener un párrafo con el título", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("Debe de tener la imagen igual al url y alt de los props", () => {
    const img = wrapper.find("img");
    // console.log( img.props('src') )

    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("Debe de tener la clase animate_fadeIn", () => {
    const div = wrapper.find("div");
    // console.log(div.props());
    const className = div.prop("className");

    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
