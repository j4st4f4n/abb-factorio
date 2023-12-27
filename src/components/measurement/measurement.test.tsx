import { render, screen } from "../../test/utils/test-utils";
import { FeatureStatus, MeasurementI } from "../../model/part.types";
import { Measurement } from "./measurement";

describe("MEASUREMENT COMPONENT", () => {
  const mockMeasurementData: MeasurementI = {
    name: "Diameter",
    dev: 1,
    devOutTotal: 0.5,
  };

  it(`should render a measurement component given measure name, deviation and
     the total deviation outside measurement for the last N pieces measured.`, () => {
    render(<Measurement {...mockMeasurementData} />);
    expect(screen.getByTestId("measurement")).toBeDefined();
    expect(screen.getByTestId("name").textContent).toBe(
      mockMeasurementData.name
    );
    expect(screen.getByTestId("dev").textContent).toBe(
      "" + mockMeasurementData.dev
    );
    expect(screen.getByTestId("dev-out-total").textContent).toBe(
      "" + mockMeasurementData.devOutTotal
    );
  });

  it(`should render a measurement component with a WARNING status`, () => {
    render(<Measurement {...mockMeasurementData} />);
    expect(screen.getByTitle(FeatureStatus.WARNING)).toBeDefined();
  });

  it(`should render a measurement component with a DANGER status`, () => {
    render(<Measurement {...mockMeasurementData} dev={2} />);
    expect(screen.getByTitle(FeatureStatus.WARNING)).toBeDefined();
  });

  it(`should render a measurement component with a SUCCESS status`, () => {
    render(<Measurement {...mockMeasurementData} dev={0} />);
    expect(screen.getByTitle(FeatureStatus.SUCCESS)).toBeDefined();
  });
});
