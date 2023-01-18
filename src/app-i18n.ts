/**
 * Interfaces in this file build off of the i18n shared components to define the interface for
 * this websites Chrome + Content
 */
import {
  I18NData_IUIChrome,
  I18NData_ISiteContent,
  I18NData,
  I18NData_IPage,
} from "./components/core/i18n/types";

// Content Data Types (per page)

export interface I18NData_HomePage_CasitaFeature {
  fontAwesomeIconClassName: string;
  blurb: string;
}

export interface I18NData_HomePage extends I18NData_IPageWithHeading {
  casitaMariposaHeading: string;
  casitaJardinHeading: string;
  casitaBirdhouseHeading: string;
  casitasFeatureHeading: string;
  casitasFeatureText: string;
  casitasFeatures: I18NData_HomePage_CasitaFeature[];
  intro: string;
}
export interface I18NData_ElJardinPage extends I18NData_CasitaPage {

}
export interface I18NData_MariposaPage extends I18NData_CasitaPage {

}
export interface I18NData_BirdhousePage extends I18NData_CasitaPage {

}
export interface I18NData_LocationPage extends I18NData_IPageWithHeading {

}
export interface I18NData_ContactPage extends I18NData_IPageWithHeading {

}

export interface I18NData_CasitaPage extends I18NData_IPageWithHeading {
  featureATitle: string;
  featureBTitle: string;
  featuresA: I18NData_CasitaFeature[];
  featuresB: I18NData_CasitaFeature[];
  gridImageIds: string[]
  sliderImageIds: string[]
}

export interface I18NData_CasitaFeature {
  icon: string;
  label: string;
}
export interface I18NData_IPageWithHeading extends I18NData_IPage {
  pageHeading: string;
}

/**
 * Represents the content for all individual pages in the site
 */
export interface I18NData_AppContent extends I18NData_ISiteContent {
  home: I18NData_HomePage;
  eljardin: I18NData_ElJardinPage;
  mariposa: I18NData_MariposaPage;
  birdhouse: I18NData_BirdhousePage;
  location: I18NData_LocationPage;
  contact: I18NData_ContactPage;
}

// Chrome Data

export interface I18NData_UIChrome extends I18NData_IUIChrome {
  siteLogoText: string;
  siteLogoShortText: string;
}

// Website (Root) Data

export interface I18NData_Website
  extends I18NData<I18NData_UIChrome, I18NData_AppContent> {
  chrome?: I18NData_UIChrome;
  content?: I18NData_AppContent;
}
