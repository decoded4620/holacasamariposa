import styles from './birdhouse.module.scss';

import { Box } from "@mui/system";
import BasePage, { BasePageProps } from '../app/base-page';
import { ReactNode } from 'react';

export interface BirdhouseProps extends BasePageProps {

}

export default class Birdhouse extends BasePage {
    constructor(public props: BirdhouseProps) {
        super(props);
    }

    public getTopContentHeight(): number {
        return 280;
    }

    render(): ReactNode {
        return (<Box className={styles.TestStyle}>
            <h1>The Birdhouse</h1>
            <h2>Private</h2>
            <p>house</p>
        </Box>);
    }
}

