import React from 'react'
import { I18N } from '../components/core/i18n/types';
import { defaultCurrentPageTracker, CurrentPageTracker, CurrentPageState, defaultCurrentPageState } from './current-page';


export interface ApplicationContext {
    currentPageTracker: CurrentPageTracker;
    currentPageProps: CurrentPageState;
    i18n: I18N;
}


export const defaultApplicationCtx: ApplicationContext = {
    /**
     * Refernce to the global site manager instance.
     */
    currentPageTracker: defaultCurrentPageTracker,
    currentPageProps: defaultCurrentPageState,
    i18n: new I18N()
}

export const ReactApplicationContext = React.createContext(defaultApplicationCtx);

// Provider and Consumer Alias.
export const ApplicationContextProvider = ReactApplicationContext.Provider;
export const ApplicationContextConsumer = ReactApplicationContext.Consumer;

export default ApplicationContext;