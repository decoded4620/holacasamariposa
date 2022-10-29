import { Box } from "@mui/material";
import { ButtonId } from "../../components/core/types";
import styles from "./contact-card-bar.module.scss";

export interface ContactCardBarButtonProps {
  width: number;
  height: number;
  altText: string;
  src: string;
  id: ButtonId;
  handleClick: (id: ButtonId) => void;
}
const ContactCardBarButton = (props: ContactCardBarButtonProps) => {
  return (
    <Box className={styles.cardbarbutton} onClick={() => props.handleClick(props.id)}>
      <img width={props.width} height={props.height} alt={props.altText} src={props.src} />
    </Box>
  );
};

export default ContactCardBarButton;
