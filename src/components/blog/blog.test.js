import React from 'react';
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import Blog from "./blog.tsx";



test ("Displays read more when blog is hovered", () => {
    const component = renderer.create(<Blog title="Hello" content="Hello" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})