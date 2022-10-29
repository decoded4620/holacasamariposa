import { Box } from "@mui/material";
import styles from './feature-card.module.scss';

export interface FeatureCardProps {
  fontAwesomeIconClassName: string;
  blurb: string;
  idx: number;
}

const FeatureCard = (props: FeatureCardProps) => {
  return (
    <Box className={styles.featureCard}>
      <i className={props.fontAwesomeIconClassName + ` ${styles['iconColor' + props.idx]}`}/>
      <p className={styles.featureText}>{props.blurb}</p>
    </Box>
  );
};

export default FeatureCard;
