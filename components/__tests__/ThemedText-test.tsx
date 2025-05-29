import * as React from "react";

import { ThemedText } from "../ThemedText";
import { render } from "@testing-library/react";

describe("ThemedText", () => {
  it("renders correctly with default theme", () => {
    const { getByText } = render(<ThemedText>Default Theme</ThemedText>);
    const textElement = getByText("Default Theme");
    expect(textElement).toBeTruthy();
    const computedStyle = window.getComputedStyle(textElement);
    expect(computedStyle.color).toBe("rgb(0, 0, 0)"); // Assuming default text color is black
  });
});

