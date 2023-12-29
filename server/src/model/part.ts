import { v4 as uuidv4 } from "uuid";
import {
  randomIntFromInterval,
  randomNumberFromInterval,
  randomString,
} from "../utils";
import {
  ElementI,
  FeatureI,
  FeatureStatus,
  MeasurementI,
  PartI,
} from "./part.types";

export const generateNewMockPart = () => {
  const numberOfFeatures = randomIntFromInterval(3, 6);
  const tempArr = Array.from(Array(numberOfFeatures).keys());
  const newFeatures = tempArr.map(() => generateNewFeature());

  const newPart: PartI = {
    id: uuidv4(),
    name: `Part ${randomString()}`,
    features: newFeatures,
  };
  return newPart;
};

export const generateNewFeature = () => {
  const randNum = randomIntFromInterval(0, 2);

  const newFeature: FeatureI = {
    id: uuidv4(),
    name: `Feature ${randomString()}`,
    status:
      randNum === 0
        ? FeatureStatus.SUCCESS
        : randNum === 1
        ? FeatureStatus.WARNING
        : FeatureStatus.DANGER,
    elements: generateNewElements(),
  };
  return newFeature;
};

export const generateNewElements = (): ElementI[] => {
  const elementNames = ["Seam", "Slot", "Hole"];
  const randNum = randomIntFromInterval(0, 9);

  switch (randNum) {
    case 9:
      return [
        {
          id: uuidv4(),
          name: `${
            elementNames[randomIntFromInterval(0, 2)]
          } ${randomString()}`,
          measurements: generateNewMeasurementsSet(3),
        },
      ];
    case 8:
    case 7:
      return [
        {
          id: uuidv4(),
          name: `${
            elementNames[randomIntFromInterval(0, 2)]
          } ${randomString()}`,
          measurements: generateNewMeasurementsSet(3),
        },
        {
          id: uuidv4(),
          name: `${
            elementNames[randomIntFromInterval(0, 2)]
          } ${randomString()}`,
          measurements: generateNewMeasurementsSet(2),
        },
      ];
    default:
      return [
        {
          id: uuidv4(),
          name: `${
            elementNames[randomIntFromInterval(0, 2)]
          } ${randomString()}`,
          measurements: generateNewMeasurementsSet(1),
        },
      ];
  }
};

export const generateNewMeasurementsSet = (num: number): MeasurementI[] => {
  let measurements: MeasurementI[] = [];
  for (let index = 0; index < num; index++) {
    measurements.push(generateNewMeasurement("x"));
    measurements.push(generateNewMeasurement("y"));
    measurements.push(generateNewMeasurement("z"));
    measurements.push(generateNewMeasurement("Diameter"));
  }
  return measurements;
};

export const generateNewMeasurement = (name: string): MeasurementI => {
  const newMeasurement: MeasurementI = {
    name,
    dev: Math.round((randomNumberFromInterval(-3, 3) * 10) / 10),
    devOutTotal: Math.round((randomNumberFromInterval(-3, 3) * 10) / 10),
  };

  return newMeasurement;
};
