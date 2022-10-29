import { Box } from "@mui/material";
import styles from "./feature-card-container.module.scss";
import sharedStyles from "../shared-page-styles.module.scss";
import FeatureCard, { FeatureCardProps } from "./feature-card";
import React from "react";

export interface FeatureCardContainerProps {
  containerHeading: string;
  containerText: string;
  containerItems: FeatureCardProps[];
}

const getFirstThird = (items: FeatureCardProps[]): FeatureCardProps[] => {
  return items.slice(0, Math.floor(items.length / 3));
};

const getSecondThird = (items: FeatureCardProps[]): FeatureCardProps[] => {
  const begin = Math.floor(items.length / 3);
  const end = begin * 2;
  return items.slice(begin, end);
};

const getLastThird = (items: FeatureCardProps[]): FeatureCardProps[] => {
  return items.slice(Math.ceil(items.length / 3) * 2);
};

const FeatureCardContainer = (props: FeatureCardContainerProps) => {
  return (
    <Box className={styles.cardsContainer} component="article">
      <h1 className={sharedStyles.pageHeader}>{props.containerHeading}</h1>
      <div
        className={sharedStyles.pageText}
        dangerouslySetInnerHTML={{ __html: props.containerText }}
      />

      <Box component="div" className={styles.cardBlock}>
        {getFirstThird(props.containerItems).map((itemProps, i) =>
          React.createElement(FeatureCard, {
            key: i,
            ...itemProps
          })
        )}
      </Box>

      <Box component="div"  className={styles.cardBlock}>
        {getSecondThird(props.containerItems).map((itemProps, i) =>
          React.createElement(FeatureCard, {
            key: i,
            ...itemProps
          })
        )}
      </Box>

      <Box component="div"  className={styles.cardBlock}>
        {getLastThird(props.containerItems).map((itemProps, i) =>
          React.createElement(FeatureCard, {
            key: i,
            ...itemProps
          })
        )}
      </Box>
    </Box>
  );
};

export default FeatureCardContainer;
