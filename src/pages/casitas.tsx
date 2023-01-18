import styles from "./casitas.module.scss";

import { Box } from "@mui/system";
import { BasePageProps } from "../app/base-page";
import { useLocation } from "react-router-dom";
import { ReactApplicationContext, updateApplicationContext } from "../app/application-ctx";
import { useContext } from "react";

export interface CasitasProps extends BasePageProps {}

export default function Casitas(props: CasitasProps) {
    updateApplicationContext(useContext(ReactApplicationContext), props, useLocation());

  return (
    <Box className={styles.TestStyle}>
      <h1> Casitas</h1>
      <h2>Because I said so</h2>
      <p>whatever</p>
    </Box>
  );
}
