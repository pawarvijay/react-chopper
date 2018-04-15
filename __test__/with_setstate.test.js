import React from "react";
import renderer from "react-test-renderer";

import { shallow, mount, render } from "enzyme";

class WithSetState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstname: "chopper" };
  }

  render() {
    return <div>Hello react {this.state.firstname}</div>;
  }

  componentDidMount() {
    this.setState({ firstname: "chopper changed kk" });
  }
}

it("renders component correctly", () => {
  const tree = renderer.create(<WithSetState />).toJSON();
  expect(tree).toMatchSnapshot();
});
