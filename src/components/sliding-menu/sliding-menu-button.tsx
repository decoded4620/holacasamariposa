import { Box, Button } from "@mui/material";
import React from 'react';
import { ButtonId } from "../core/types";
import styles from './sliding-menu.module.scss'


export interface SlidingMenuButtonProps {
    id: ButtonId;
    label: string;
    onButtonClick: (id: ButtonId) => void;
}

export interface SlidingMenuButtonState {

}


export default class SlidingMenuButton extends React.Component<SlidingMenuButtonProps, SlidingMenuButtonState> {
    public state = {
    };

    constructor(public props: SlidingMenuButtonProps) {
        super(props);
    }

    private handleButtonClick(buttonId: ButtonId) {
        this.props.onButtonClick(buttonId);
    }

    render(): React.ReactNode {
        return (
            <Box className={styles.buttoncontainer}><Button color='inherit' className={styles.buttonextras} onClick={(event: unknown) => this.handleButtonClick(this.props.id)}>{this.props.label}</Button><br></br></Box>
        )
    }
}
