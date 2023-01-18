import { Button } from "@mui/material";
import sharedStyles from "../../../shared-global-styles.module.scss";
import { sanitizeUrl } from "@braintree/sanitize-url";

export interface ActionButtonProps {
  link: string;
  label: string;
}
export default function ActionButton(props: ActionButtonProps) {
  return (
    <a href={sanitizeUrl(props.link)} rel="noreferrer noopener" target="_blank">
      <Button className={sharedStyles.button}>{props.label}</Button>
    </a>
  );
}
