import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from './navigation.module.scss'

import { useState, useEffect } from 'react';
import { getWindowWidth, windowResizeEffect } from "../resize/resizeListener";
import Hamburger from "../core/buttons/hamburger";
import { IdButtonHandler, ButtonId, ButtonHandler, ButtonData } from "../core/types";

export interface NavigationMenuItem {
  label: string;
  id?: ButtonId;
}

export interface NavigationProps {
  text: string;
  shortText: string;
  menuItems: ButtonData[];
  mobileViewMaxWidth: number;
  darkMode: boolean;
  handleMenuToggleButtonClick: ButtonHandler;
  handleNavButtonClick: IdButtonHandler;
  handleLogoButtonClick: ButtonHandler;
}

export default function Navigation(props: NavigationProps) {
  // save current window width in the state object
  let [width, setWidth] = useState(getWindowWidth());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    return windowResizeEffect(() => setWidth(getWindowWidth()));
  }, [])

  const onNavItemClicked = (buttonId?: ButtonId) => {
    if (buttonId === undefined) {
      throw new Error(`Button has no assigned id!`);
    }

    props.handleNavButtonClick(buttonId);
  }

  const onMenuToggleClicked = () => {
    props.handleMenuToggleButtonClick();
  }

  const onLogoClicked = () => {
    props.handleLogoButtonClick();
  }

  return (
    <AppBar className={(props.darkMode ? styles.navbarDark : styles.navbarLight)}>
      <Toolbar className={styles.toolbar}>
        <Typography onClick={() => onLogoClicked()} component="div" className={styles.sitelogo}>
          <h2 className={styles.navheader}>{width > props.mobileViewMaxWidth ? props.text : props.shortText}</h2>
        </Typography>

        {/* Spacer Box to separate the logo and menu items */}
        <Box className={styles.spacer} component="div"></Box>

        {width > props.mobileViewMaxWidth ?
          <Box className={styles.menubox}>
            {props.menuItems.map((menuItemData, i) =>
              React.createElement(
                Button,
                {
                  key: i, // needed for react createElement to work
                  className: (props.darkMode ? styles.menubuttonDark : styles.menubuttonLight),
                  onClick: (event: unknown) => onNavItemClicked(menuItemData.id)
                },
                menuItemData.label))}
          </Box>
          : null}

        {
        width <= props.mobileViewMaxWidth
            ? <Hamburger clickHandler={() => onMenuToggleClicked()} className={(props.darkMode ? styles.hamburgerDark : styles.hamburgerLight)} />
            : null
        }
      </Toolbar>
    </AppBar>
  );
}
