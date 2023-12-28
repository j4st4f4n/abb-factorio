import { measurementDiameter, render, screen } from "@/test";
import { FeatureStatus } from "@/model";
import { Measurement } from ".";

describe("MEASUREMENT COMPONENT", () => {
  it(`should render a measurement component given measure name, deviation and
     the total deviation outside measurement for the last N pieces measured.`, () => {
    render(<Measurement {...measurementDiameter} />);
    expect(screen.getByTestId("measurement")).toBeDefined();
    expect(screen.getByTestId("name").textContent).toBe(
      measurementDiameter.name
    );
    expect(screen.getByTestId("dev").textContent).toBe(
      "" + measurementDiameter.dev
    );
    expect(screen.getByTestId("dev-out-total").textContent).toBe(
      "" + measurementDiameter.devOutTotal
    );
  });

  it(`should render a measurement component with a WARNING status`, () => {
    render(<Measurement {...measurementDiameter} />);
    expect(screen.getByTitle(FeatureStatus.WARNING)).toBeDefined();
  });

  it(`should render a measurement component with a DANGER status`, () => {
    render(<Measurement {...measurementDiameter} dev={2} />);
    expect(screen.getByTitle(FeatureStatus.WARNING)).toBeDefined();
  });

  it(`should render a measurement component with a SUCCESS status`, () => {
    render(<Measurement {...measurementDiameter} dev={0} />);
    expect(screen.getByTitle(FeatureStatus.SUCCESS)).toBeDefined();
  });
});
