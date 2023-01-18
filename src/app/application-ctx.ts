import React from 'react'
import { Location } from 'react-router-dom';
import { I18N } from '../components/core/i18n/types';
import { BasePageProps } from './base-page';
import { defaultCurrentPageTracker, CurrentPageTracker, CurrentPageState, defaultCurrentPageState } from './current-page';


export interface ApplicationContext {
    /**
     * Tracks the current page used for doing a window.replace when performing external redirect routes.
     */
    currentPageTracker: CurrentPageTracker;
    currentPageProps: CurrentPageState;
    i18n: I18N;
    cdn: string;
}

export const defaultApplicationCtx: ApplicationContext = {
    currentPageTracker: defaultCurrentPageTracker,
    currentPageProps: defaultCurrentPageState,
    i18n: new I18N(),

    // TODO: Load this from a site configuration
    cdn: "https://cdn-casamariposa.s3.us-east-2.amazonaws.com"
}

export const ReactApplicationContext = React.createContext(defaultApplicationCtx);

// Provider and Consumer Alias.
export const ApplicationContextProvider = ReactApplicationContext.Provider;
export const ApplicationContextConsumer = ReactApplicationContext.Consumer;

/**
 * Called on route change to update the properties for the current page
 *
 * @param appCtx the ApplicationContext instance
 * @param pageProps the properties of the current page
 * @param location The Path of the current route
 */
export const updateApplicationContext = (appCtx: ApplicationContext, pageProps: BasePageProps, location: Location): void => {
    appCtx.currentPageTracker.set(location.pathname);
    appCtx.currentPageProps = {
      topContentHeight: pageProps.topContentHeight,
    };
}

export default ApplicationContext;