import { featureA, render, screen } from "@/test";
import { Feature } from "./feature";

describe("FEATURE COMPONENT", () => {
  it("should render a feature", () => {
    render(<Feature {...featureA} />);
    const infoIconElement = screen.getByTitle("info");
    expect(infoIconElement).toBeDefined();

    const titleElement = screen.getByTitle(featureA.name);
    expect(titleElement).toHaveTextContent(featureA.name.toLocaleUpperCase());

    const iconStatusElement = screen.getByTitle(
      `feature-${featureA.status.toLowerCase()}`
    );
    expect(iconStatusElement).toBeInTheDocument();

    const featureElements = screen.getAllByTestId("feature-element");
    expect(featureElements).toHaveLength(featureA.elements.length);

    let numMeasurements = 0;
    featureA.elements.forEach(element => {
      numMeasurements += element.measurements.length;
    });

    const measurementsElements = screen.getAllByTestId("measurement");
    expect(measurementsElements.length).toBe(numMeasurements);
  });
});
