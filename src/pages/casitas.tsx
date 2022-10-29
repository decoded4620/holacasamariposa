import styles from './casitas.module.scss';

import { Box } from "@mui/system";
import BasePage, { BasePageProps } from '../app/base-page';
import { ReactNode } from 'react';

export interface CasitasProps extends BasePageProps {

}

export default class Casitas extends BasePage {
    constructor(public props: CasitasProps) {
        super(props);
    }

    public getTopContentHeight(): number {
        return 1;
    }

    render(): ReactNode {
        return (<Box className={styles.TestStyle}>
            <h1> Casitas</h1>
            <h2>Because I said so</h2>
            <p>whatever</p>
        </Box>);
    }
}

