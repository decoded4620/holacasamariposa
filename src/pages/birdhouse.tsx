import styles from "./birdhouse.module.scss";

import { CasitaPageProps } from "../app/base-page";
import { useLocation } from "react-router-dom";
import {
  ReactApplicationContext,
  updateApplicationContext,
} from "../app/application-ctx";
import { useContext } from "react";
import CasitaDetails from "./shared/casita-details";
import { I18NData_BirdhousePage, I18NData_MariposaPage } from "../app-i18n";

export interface BirdhouseProps extends CasitaPageProps {
  pageTranslations?: I18NData_BirdhousePage;
}

export default function Birdhouse(props: BirdhouseProps) {
  const ctx = useContext(ReactApplicationContext);
  const i18n = props.pageTranslations;
  updateApplicationContext(ctx, props, useLocation());
  const gridImageIds = i18n?.gridImageIds || [];
  const sliderImageIds = i18n?.sliderImageIds || [];

  const gridImages = gridImageIds.map((id) => {
    return {
      src: `${ctx.cdn}/${id}_M.jpg`,
      width: 3,
      height: 4,
      title: `Grid Image ${id}`,
    };
  });

  const sliderImages = sliderImageIds.map((id) => {
    return {
      src: `${ctx.cdn}/${id}_M.jpg`,
      width: 4,
      height: 3,
      title: `Slider Image ${id}`,
    };
  });

  return (
    <CasitaDetails
    backgroundImage={styles.imagebg}
    bookingLabel="Book Now"
    bookingLink={props.bookingLink}
    pageHeading={i18n?.pageHeading || ''}
    featureATitle={i18n?.featureATitle || ''}
    featureBTitle={i18n?.featureBTitle || ''}
    featuresA={i18n?.featuresA || []}
    featuresB={i18n?.featuresB || []}
    gridImages={gridImages}
    sliderImages={sliderImages}
    styles={styles}
    pageText={props.pageText}
    />
  );
}
