export enum FeatureStatus {
  SUCCESS = "SUCCESS",
  WARNING = "WARNING",
  DANGER = "DANGER",
}

export interface PartI {
  id: string;
  name: string;
  features: FeatureI[];
}

export interface FeatureI {
  id: string;
  name: string;
  status: FeatureStatus;
  elements: ElementI[];
}

export interface ElementI {
  id: string;
  name: string; // Seam, Slot, Hole
  measurements: MeasurementI[];
}

export interface MeasurementI {
  name: string; // position (x,y,z), length , diameter...
  dev: number;
  devOutTotal: number;
}
