import { elementSeam, render, screen } from "@/test";
import { Element } from ".";

describe("ELEMENT COMPONENT", () => {
  it("should display a feature element given its measurements", () => {
    render(<Element {...elementSeam} />);
    expect(screen.getByTestId("feature-element")).toBeDefined();
    expect(screen.getByTestId("feature-element-header")).toBeDefined();
    expect(screen.getByTestId("feature-element-body")).toBeDefined();
    expect(screen.getAllByTestId("measurement").length).toBe(
      elementSeam.measurements.length
    );
  });
});
