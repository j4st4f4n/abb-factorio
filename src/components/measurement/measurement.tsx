import { FeatureStatus, MeasurementI } from "@/model";
import { theme } from "@/shared";

import CheckSvg from "../../icons/check-circle.svg?react";
import WarningSvg from "../../icons/exclamation-circle.svg?react";
import DangerSvg from "../../icons/x-circle.svg?react";

import MeasurementStyles from "./measurement.module.css";

export const Measurement = ({ name, dev, devOutTotal }: MeasurementI) => {
  const handleStatus = () => {
    // For simplicity I'll assume deviations within -1 to 1 are correct and anything past 2 or -2 is incorrect
    const isCorrectDeviation = dev > -1 && dev < 1;
    const isWrongDeviation = dev > 2 || dev < -2;

    if (isCorrectDeviation)
      return (
        <CheckSvg
          title={FeatureStatus.SUCCESS}
          color={theme.colors[FeatureStatus.SUCCESS]}
        />
      );
    if (isWrongDeviation)
      return (
        <DangerSvg
          title={FeatureStatus.DANGER}
          color={theme.colors[FeatureStatus.DANGER]}
        />
      );
    return (
      <WarningSvg
        title={FeatureStatus.WARNING}
        color={theme.colors[FeatureStatus.WARNING]}
      />
    );
  };

  return (
    <div className={MeasurementStyles.measurement} data-testid="measurement">
      <div className={MeasurementStyles.name} data-testid="name">
        {name}
      </div>
      <div className={MeasurementStyles.dev} data-testid="dev">
        {dev}
      </div>
      <div
        className={MeasurementStyles.devOutTotal}
        data-testid="dev-out-total"
      >
        {devOutTotal}
      </div>
      <div className={MeasurementStyles.status}>{handleStatus()}</div>
    </div>
  );
};
