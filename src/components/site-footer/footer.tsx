import Box from "@mui/material/Box";
import { Button, Toolbar } from "@mui/material";
import React, { useEffect } from "react";
import styles from "./footer.module.scss";
import { ButtonId, IdButtonHandler, ButtonData } from "../core/types";
import { getWindowWidth, windowResizeEffect } from "../resize/resizeListener";

export interface FooterProps {
  handleNavItemClick: IdButtonHandler;
  menuItems: ButtonData[];
  mobileViewMaxWidth: number;
}

export default function Footer(props: FooterProps) {
  // save current window width in the state object
  // TODO: use width the render buttons or visibility
  let [width, setWidth] = React.useState(getWindowWidth());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    return windowResizeEffect(() => setWidth(getWindowWidth()));
  }, [setWidth]);

  const onNavItemClicked = (buttonId?: ButtonId) => {
    if (buttonId === undefined) {
      throw new Error(`Button has no assigned id!`);
    }

    props.handleNavItemClick(buttonId);
  };

  return (
    <Box className={styles.footer}>
      <Toolbar className={styles.footertoolbar}>
        {props.menuItems.map((menuItemData, i) =>
          React.createElement(
            Button,
            {
              key: i, // needed for react createElement to work
              color: "inherit",
              className: styles.footerbutton,
              onClick: (event: unknown) => onNavItemClicked(menuItemData.id),
            },
            menuItemData.label
          )
        )}
      </Toolbar>
    </Box>
  );
}
