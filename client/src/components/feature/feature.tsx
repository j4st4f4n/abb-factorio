import { ElementI, FeatureI, FeatureStatus } from "@/model";
import { theme } from "@/shared";
import { DangerSvg, WarningSvg, CheckSvg, DotsSvg, CircleSvg } from "@/icons";
import { Element } from "@/components";

import FeatureStyles from "./feature.module.css";

export const Feature = ({ name, status, elements }: FeatureI) => {
  const statusHandler = () => {
    if (status === FeatureStatus.DANGER)
      return <DangerSvg title="feature-danger" color="white" />;
    if (status === FeatureStatus.WARNING)
      return <WarningSvg title="feature-warning" color="white" />;
    return <CheckSvg title="feature-success" color="white" />;
  };
  const calculateNumberSpanRows = () => {
    let maxMeasurements = 0;
    elements.forEach(element => {
      const numMeasurements = element.measurements.length;
      if (numMeasurements > maxMeasurements) maxMeasurements = numMeasurements;
    });
    return maxMeasurements / 4;
    // TODO: Row measurements rework
  };

  return (
    <div
      className={FeatureStyles.feature}
      style={{
        gridColumnEnd: `span ${elements.length}`,
        gridRowEnd: `span ${calculateNumberSpanRows()}`,
      }}
    >
      <div
        className={FeatureStyles.featureHeader}
        style={{ backgroundColor: theme.colors[status] }}
        data-testid="feature"
      >
        <CircleSvg title="info" color="white" />
        <div className={FeatureStyles.title} title={name}>
          {name.toUpperCase()}
        </div>
        <div>{statusHandler()}</div>
      </div>
      <div className={FeatureStyles.featureBody}>
        {elements.map((element: ElementI) => (
          <Element key={element.id} {...element} />
        ))}
      </div>
      <div className={FeatureStyles.featureFooter}>
        <DotsSvg />
      </div>
    </div>
  );
};
