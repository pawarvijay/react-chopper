import React from "react";

import renderer from "react-test-renderer";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import { shallow, mount, render } from "enzyme";

import TestComponent from "./components/TestComponent";
it("renders component correctly", () => {
  const tree = renderer.create(<TestComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
