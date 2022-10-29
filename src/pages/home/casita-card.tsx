import { Box } from "@mui/material";
import styles from "./casita-card.module.scss";

export interface CasitaCardProps {
  heading: string;
  imageSrc: string;
  headerClassName: string;
  id: string;
  handleCardClick: (id: string) => void;
}

const CasitaCard = (props: CasitaCardProps) => {
  return (
    <Box className={styles.casitacard} onClick={() => props.handleCardClick(props.id)}>
      <h2 className={props.headerClassName}>
        {props.heading}
      </h2>
      <img
        className={styles.casitaimg}
        alt={props.heading}
        src={props.imageSrc}
      />
    </Box>
  );
};

export default CasitaCard;
