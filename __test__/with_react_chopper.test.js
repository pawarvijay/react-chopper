import React from "react";
import renderer from "react-test-renderer";
import rcp from "../src/index";
import { shallow, mount, render } from "enzyme";

class WithReactChopper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstname: "chopper" };
    this.model = rcp(this.state, this);
  }

  render() {
    return <div>Hello react {this.model.firstname}</div>;
  }

  componentDidMount() {
    this.model.firstname = "chopper changed";
  }
}

it("renders component using react-chopper instead of setstate", () => {
  const tree = renderer.create(<WithReactChopper />).toJSON();
  expect(tree).toMatchSnapshot();
});