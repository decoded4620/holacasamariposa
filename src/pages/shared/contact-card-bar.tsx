import { Box, Toolbar } from "@mui/material";
import { ButtonId } from "../../components/core/types";
import ContactCardBarButton from "./contact-card-bar-button";
import styles from "./contact-card-bar.module.scss";
import globalstyles from "../../shared-global-styles.module.scss";
import HyperlinkedText from "../../components/core/buttons/hyperlinked-text";

export interface ContactCardBarProps {
  sectionHeading: string;
  sectionText: string;
  emailAddress: string;
  handleCardSelect: (id: ButtonId) => void
}

const ContactCardBar = (props: ContactCardBarProps) => {

  return (
    <Box className={styles.contactcardcontainer} component="article">
      <Box component="div">
      <h1 className={styles.sectionHeading}>{props.sectionHeading}</h1>
      <p>Please email us at <HyperlinkedText link={`mailto:${props.emailAddress}?subject=Casa Mariposa Inquiry&body=Hello Heidi,`} label={props.emailAddress} enableCopy={true}
          copyLabel={true}/> or...</p>
      <p>{props.sectionText}</p>
      </Box>

      <Toolbar className={styles.contactcardbar} component="div">
        <div className={globalstyles.spacerw}></div>
        <ContactCardBarButton
          handleClick={(id: ButtonId) => props.handleCardSelect(id)}
          id="our_facebook"
          altText="Facebook Link"
          width={42}
          height={42}
          src="images/fb.png"
        />
        <ContactCardBarButton
          handleClick={(id: ButtonId) => props.handleCardSelect(id)}
          id="our_ig"
          altText="Instagram Link"
          width={42}
          height={42}
          src="images/ig.png"
        />
        <ContactCardBarButton
          handleClick={(id: ButtonId) => props.handleCardSelect(id)}
          id="our_linked_in"
          altText="LinkedIn Profile Link"
          width={42}
          height={42}
          src="images/in-logo.jpg"
        />
        <ContactCardBarButton
          handleClick={(id: ButtonId) => props.handleCardSelect(id)}
          id="our_gmail"
          altText="Gmail Link"
          width={42}
          height={42}
          src="images/gmail.png"
        />
        <div className={globalstyles.spacerw}></div>
      </Toolbar>
    </Box>
  );
};

export default ContactCardBar;
