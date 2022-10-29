import styles from './eljardin.module.scss';

import { Box } from "@mui/system";
import BasePage, { BasePageProps } from '../app/base-page';
import { ReactNode } from 'react';

export interface ElJardinProps extends BasePageProps {

}

export default class ElJardin extends BasePage {
    constructor(public props: ElJardinProps) {
        super(props);
    }

    public getTopContentHeight(): number {
        return 280;
    }

    render(): ReactNode {
        return (<Box className={styles.TestStyle}>
            <h1>El Jardin</h1>
            <h2>Private</h2>
            <p>house</p>
        </Box>);
    }
}

