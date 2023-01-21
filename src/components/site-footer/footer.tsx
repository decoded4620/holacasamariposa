import Box from "@mui/material/Box";
import { Button, Toolbar } from "@mui/material";
import styles from "./footer.module.scss";
import { ButtonId, IdButtonHandler, ButtonData } from "../core/types";
import React from "react";
import HyperlinkedText from "../core/buttons/hyperlinked-text";

export interface FooterProps {
  handleNavItemClick: IdButtonHandler;
  menuItems: ButtonData[];
  mobileViewMaxWidth: number;
}

export default function Footer(props: FooterProps) {
  // save current window width in the state object
  const onNavItemClicked = (buttonId?: ButtonId) => {
    if (buttonId === undefined) {
      throw new Error(`Button has no assigned id!`);
    }

    props.handleNavItemClick(buttonId);
  };

  return (
    <Box className={styles.footer}>
      <Toolbar className={styles.footertoolbar}>
        {props.menuItems.map((menuItemData, i) => (
          <Button
            key={i}
            color="inherit"
            className={styles.footerbutton}
            onClick={(_event: unknown) => onNavItemClicked(menuItemData.id)}
          >
            {menuItemData.label}
          </Button>
        ))}
        <Box className={styles.footeritem}>
        <HyperlinkedText
          label="House Rules (ES)"
          link="https://docs.google.com/viewerng/viewer?url=https://cdn-casamariposa.s3.us-east-2.amazonaws.com/house_rules_es.pdf"
          enableCopy={true}
          copyLabel={false}
        />
        </Box>
        <Box className={styles.footeritem}>
        <HyperlinkedText
          label="House Rules (EN)"
          link="https://docs.google.com/viewerng/viewer?url=https://cdn-casamariposa.s3.us-east-2.amazonaws.com/house_rules_en.pdf"
          enableCopy={true}
          copyLabel={false}
        />
        </Box>
      </Toolbar>
    </Box>
  );
}
