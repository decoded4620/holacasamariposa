import { sanitizeUrl } from "@braintree/sanitize-url";
import { useState } from "react";
import styles from './hyperlinked-text.module.scss';
import { toast } from "react-toastify"

interface Props {
  link: string;
  enableCopy: boolean;
  copyLabel: boolean;
  label: string;
  target?: string;
  rel?: string;
}
export default function HyperlinkedText(props: Props) {
  const [showCopy, setShowCopy] = useState(false);
  const copyToClipboard = () => {
       // Copy either the link or the label depending on the props.
       navigator.clipboard.writeText(props.copyLabel ? props.label : props.link);
       toast("Content Copied to Clipboard!", {
        theme: "dark",
        autoClose: 2500,
        position:"bottom-center"
       });
  }
  return (
    <span  onMouseEnter={() => setShowCopy(true)}
    onMouseLeave={() => setShowCopy(false)}
    >
      <a
        href={sanitizeUrl(props.link)}
        rel={props.rel ?? "noreferrer noopener"}
        target={props.target ?? "_blank"}
      >
        {props.label}
      </a>
      &nbsp;&nbsp;{showCopy && <span className={styles.copyButton} onMouseUp={() => copyToClipboard()}><i className="far fa-copy"></i></span>}
    </span>
  );
}
