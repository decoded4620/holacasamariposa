import { NavigateFunction, useNavigate } from "react-router-dom";
import { ButtonData, ButtonId, UrlMappings } from "../components/core/types";

// Map button click (identifiers) to local urls
const mapping: UrlMappings = {
  idToLocalPathMapping: new Map([
    ["contact", "/home#contactus"],
    ["home", "/home"],
    ["location", "/location"],
    ["casitas", "/home#casitas"],
    ["eljardin", "/eljardin"],
    ["mariposa", "/mariposa"],
    ["birdhouse", "/birdhouse"],
    ["resources", "/resources"],
    ["our_facebook", "/ourfb"],
    ["our_ig", "/ourig"],
    ["our_linked_in", "/ourli"],
    ["our_airbnb", "/ourairbnb"],
    ["our_gmail", "/ourgmail"],
  ]),
};

// button ids match the mapping above.
export const menuItems: ButtonData[] = [
  { id: "casitas", label: "Casitas" },
  { id: "location", label: "Location" },
  { id: "resources", label: "Resources" },
  { id: "contact", label: "Contact" },
];


export const mobileMenuItems: ButtonData[] = [
  { id: "eljardin", label: "El Jardin" },
  { id: "mariposa", label: "Casa Mariposa" },
  { id: "birdhouse", label: "The Birdhouse" },
];

export const footerMenuItems: ButtonData[] = [
  { id: "our_airbnb", label: "Your Host" },
];

export const navigateTo = (
  id: ButtonId,
  navigate: NavigateFunction
) => {
  const url = mapping.idToLocalPathMapping.get(id);
  console.log(`Navigate To: ${id} -> mapped url: ${url}`);

  if (!url) {
    throw new Error(
      `No url found for button ${id} was it added to idToLocalPathMapping?`
    );
  }

  navigate(url);
};
