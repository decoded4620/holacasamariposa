import { Box } from "@mui/material";
import Gallery from "react-photo-gallery";
import Carousel, { CarouselImage } from "../../components/core/ui/carousel";
import sharedStyles from "../shared-page-styles.module.scss";
import { getActionButton } from "./ui-utils";
import CasitaFeatures, { Feature } from "./casita-features";

export interface CasitaDetailsProps {
  backgroundImage: string;
  pageHeading: string;
  pageText: string;
  featureATitle: string;
  featureBTitle: string;
  featuresA: Feature[];
  featuresB: Feature[];
  bookingLink: string;
  bookingLabel: string;

  sliderImages: CarouselImage[];
  gridImages: CarouselImage[];
  styles: {
    readonly [key: string]: string;
  };
}

export default function CasitaDetails(props: CasitaDetailsProps) {
  return (
    <Box className={sharedStyles.page}>
      {/* Top Content Image */}
      <Box className={props.styles.imagebg} />

      <Box className={sharedStyles.pagecontent}>
        <Box className={sharedStyles.pageText}>
          <h2>{props.pageHeading}</h2>
          <p>{props.pageText}</p>
          <br />
          <Carousel
            images={props.sliderImages}
            navigation={window.innerWidth > 500}
            pagination={false}
            keyboard={true}
            mouseWheel={true}
            onLoad={() => console.log(`Carousel loaded`)}
          />
          {window.innerWidth <= 500 && <i>swipe to see more...</i>}
        </Box>
      </Box>

      <Box className={sharedStyles.pagecontent}>
        <CasitaFeatures
          featuresTitle={props.featureATitle}
          labels={props.featuresA}
        />
      </Box>
      <Box className={sharedStyles.pagecontent}>
        <CasitaFeatures
          featuresTitle={props.featureBTitle}
          labels={props.featuresB}
        />
      </Box>

      {getActionButton(props.bookingLink, props.bookingLabel)}

      <Box className={sharedStyles.pagecontent}>
        <br />
        <Gallery photos={props.gridImages} />
      </Box>
      {getActionButton(props.bookingLink, props.bookingLabel)}
    </Box>
  );
}
