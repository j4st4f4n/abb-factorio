import { FeatureI, PartI } from "@/model";
import { Feature } from "@/components";

import PartStyles from "./part.module.css";

export const Part = ({ name, features }: PartI) => {
  return (
    <div data-testid="part">
      <h3 className={PartStyles.partTitle} title={name}>
        {name}
      </h3>
      <div className={PartStyles.partBody}>
        {features.map((feature: FeatureI) => {
          return <Feature key={feature.id} {...feature} />;
        })}
      </div>
    </div>
  );
};
