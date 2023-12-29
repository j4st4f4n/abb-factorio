import { elementSeam, render, screen } from "@/test";
import { Element } from ".";

describe("ELEMENT COMPONENT", () => {
  it("should display a feature element", () => {
    render(<Element {...elementSeam} />);
    expect(screen.getByTestId("feature-element")).toBeInTheDocument();
    expect(screen.getByTestId("feature-element-header")).toBeInTheDocument();
    expect(screen.getByTestId("feature-element-body")).toBeInTheDocument();
    expect(screen.getAllByTestId("measurement")).toHaveLength(
      elementSeam.measurements.length
    );
  });
});
