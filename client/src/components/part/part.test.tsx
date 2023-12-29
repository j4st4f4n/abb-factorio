import { partA, render, screen } from "@/test";
import { Part } from ".";

describe("PART COMPONENT", () => {
  it("should render a part", () => {
    render(<Part {...partA} />);

    const titleElement = screen.getByTitle(partA.name);
    expect(titleElement).toHaveTextContent(partA.name);

    const featureElements = screen.getAllByTestId("feature");
    expect(featureElements).toHaveLength(partA.features.length);
  });
});
