import { Box } from "@mui/material";
import React from 'react';
import { ButtonId, ButtonData } from "../core/types";
import SlidingMenuButton from "./sliding-menu-button";
import styles from './sliding-menu.module.scss'

export interface SlidingMenuProps {
    menuItems: ButtonData[];
    onMenuItemClick: (buttonId: ButtonId) => void;
}

export interface SlidingMenuState {
    toggled: boolean
}


export default class SlidingMenu extends React.Component<SlidingMenuProps, SlidingMenuState> {
    public state: SlidingMenuState = {
        toggled: false
    };

    constructor(public props: SlidingMenuProps) {
        super(props);

        this.state = {
            toggled: false
        }

        this.toggle = this.toggle.bind(this);
    }

    private handleButtonClick(buttonId: ButtonId) {
        this.props.onMenuItemClick(buttonId);
    }

    public toggle(): void {
        const { toggled } = this.state;
        this.setState({ toggled: !toggled });
    }

    public isToggled(): boolean {
        return this.state.toggled;
    }

    render(): React.ReactNode {
        const { toggled } = this.state;

        return (
            <Box className={styles['menu-box-base'] + ' ' + (toggled ? styles['menu-box-show'] : styles['menu-box-hide'])}>
                <Box className={styles.spacerv} component="div"></Box>

                {
                    this.props.menuItems.map((menuItem, i) =>
                        React.createElement(
                            SlidingMenuButton, {
                            key: i,
                            id: menuItem.id,
                            label: menuItem.label,
                            onButtonClick: (id: ButtonId) => this.handleButtonClick(id)
                        },
                            menuItem.label))
                }
            </Box>
        )
    }

}
