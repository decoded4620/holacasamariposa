import { Box } from "@mui/material";
import { ElementType } from "react";
import CasitaCard from "./casita-card";
import styles from './casita-card-container.module.scss';

export interface CasitaCardContainerProps {
  casitaJardinHeading: string;
  casitaMariposaHeading: string;
  casitaBirdhouseHeading: string;
  handleCardSelection: (cardId: string) => void;
  component: ElementType<any>;
}

const CasitaCardContainer = (props: CasitaCardContainerProps) => {
  return (
    <Box className={styles.cards} component={props.component}>
      {/* El Jardin */}
      <CasitaCard
        id="eljardin"
        handleCardClick={(id) => props.handleCardSelection(id)}
        headerClassName={styles.jardinheader}
        heading={props.casitaJardinHeading ?? ""}
        imageSrc="https://cdn-casamariposa.s3.us-east-2.amazonaws.com/el_jardin_tile_L.jpg"
      />

      {/* Casa Mariposa */}
      <CasitaCard
        id="mariposa"
        handleCardClick={(id) => props.handleCardSelection(id)}
        headerClassName={styles.mariposaheader}
        heading={props.casitaMariposaHeading ?? ""}
        imageSrc="https://cdn-casamariposa.s3.us-east-2.amazonaws.com/casa_mariposa_tile_L.jpg"
      />

      {/* Birdhouse */}
      <CasitaCard
        id="birdhouse"
        handleCardClick={(id) => props.handleCardSelection(id)}
        headerClassName={styles.birdhouseheader}
        heading={props.casitaBirdhouseHeading ?? ""}
        imageSrc="https://cdn-casamariposa.s3.us-east-2.amazonaws.com/birdhouse_tile_L.jpg"
      />
    </Box>
  );
};

export default CasitaCardContainer;
