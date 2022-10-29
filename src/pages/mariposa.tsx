import styles from './mariposa.module.scss';

import { Box } from "@mui/system";
import BasePage, { BasePageProps } from '../app/base-page';
import { ReactNode } from 'react';

export interface MariposaProps extends BasePageProps {

}

export default class Mariposa extends BasePage {
    constructor(public props: MariposaProps) {
        super(props);
    }

    public getTopContentHeight(): number {
        return 280;
    }

    render(): ReactNode {
        return (<Box className={styles.TestStyle}>
            <h1>Casa Mariposa</h1>
            <h2>Private</h2>
            <p>house</p>
        </Box>);
    }
}

