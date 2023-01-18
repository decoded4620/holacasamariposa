import Box from "@mui/material/Box";
import { Button, Toolbar } from "@mui/material";
import styles from "./footer.module.scss";
import { ButtonId, IdButtonHandler, ButtonData } from "../core/types";

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
        {props.menuItems.map((menuItemData, i) =>
          React.createElement(
            Button,
            {
              key: i, // needed for react createElement to work
              color: "inherit",
              className: styles.footerbutton,
              onClick: (_event: unknown) => onNavItemClicked(menuItemData.id),
            },
            menuItemData.label
          )
        )}
      </Toolbar>
    </Box>
  );
}
