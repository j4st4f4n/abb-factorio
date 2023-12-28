import { v4 as uuidv4 } from "uuid";

import { ElementI, MeasurementI } from "@/model";
import { Measurement } from "@/components";
import ElementStyles from "./element.module.css";

export const Element = ({ measurements }: ElementI) => {
  return (
    <div data-testid="feature-element" className={ElementStyles.featuredColumn}>
      <div
        data-testid="feature-element-header"
        className={ElementStyles.measurementsHeader}
      >
        <div className={ElementStyles.measurementControl}>Control</div>
        <div className={ElementStyles.measurementDev}>Dev</div>
        <div className={ElementStyles.measurementDevOutTotal}>Dev Out Tol</div>
        <div className={ElementStyles.measurementStatus}></div>
      </div>
      <div
        data-testid="feature-element-body"
        className={ElementStyles.measurementsData}
      >
        {measurements.map((measurement: MeasurementI) => (
          <Measurement key={uuidv4()} {...measurement} />
        ))}
      </div>
    </div>
  );
};
