import { MeasurementI, ElementI, FeatureI, FeatureStatus } from "@/model";

export const measurementX: MeasurementI = {
  name: "x",
  dev: 1,
  devOutTotal: 0.5,
};
export const measurementY: MeasurementI = {
  name: "y",
  dev: 1,
  devOutTotal: 0.5,
};
export const measurementZ: MeasurementI = {
  name: "z",
  dev: 1,
  devOutTotal: 0.5,
};
export const measurementDiameter: MeasurementI = {
  name: "Diameter",
  dev: 1,
  devOutTotal: 0.5,
};

export const elementSeam: ElementI = {
  id: "123",
  name: "Seam",
  measurements: [measurementX, measurementY, measurementZ, measurementDiameter],
};

export const featureA: FeatureI = {
  id: "123",
  name: "feature test",
  status: FeatureStatus.WARNING,
  elements: [elementSeam],
};
