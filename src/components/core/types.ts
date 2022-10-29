export type RenderFunction = () => void;

// Identifiers for buttons that are clicked, e.g. menu buttons
export type ButtonId = string | number;

// Button Click Handler with no inputs
export type ButtonHandler = () => void;

// Button Click handler with button id input
export type IdButtonHandler = (buttonId: ButtonId) => void;

// Data used by buttons to identify and label themselves.
export interface ButtonData {
  id: ButtonId;
  label: string;
}

// Mapping of identifiers or keys to urls or paths which enable button clicks on the site
// to be decoupled from the resources they open.
export interface UrlMappings {
  idToLocalPathMapping: Map<ButtonId, string>;
}

/**
 * Opens an external either in the current window, or a new window, depending on the target settings.
 *
 * @param url the location
 * @param target the target to open the location, e.g. '_blank'
 * @param currentRoute if provided, will replace the current route in the window location to avoid this redirect being in the history
 * of the users browser, if for instance, using a route to force the redirect.
 * @see window.open
 * @see window.location.replace
 */
export interface ExternalUrl {
  url: string;
  target: string;
  currentRoute?: string;
}
