import { sanitizeUrl } from "@braintree/sanitize-url";

interface Props {
  link: string;
  label: string;
  target?:string;
  rel?:string;
}

export default function HyperlinkedText(props: Props) {
  return (
    <a href={sanitizeUrl(props.link)} rel={props.rel ?? "noreferrer noopener"} target={props.target ?? "_blank"}>{props.label}</a>
  );
}
