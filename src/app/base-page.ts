import { NavigateFunction } from "react-router-dom";
import { I18NData_IPage } from "../components/core/i18n/types";

export interface BasePageProps {
  pageRoute: string;
  maxMobileViewWidth: number;
  pageTranslations?: I18NData_IPage;
  navigate: NavigateFunction;
  topContentHeight: number;
}

export interface CasitaPageProps extends BasePageProps {

  pageText: string;
  bookingLink: string;
}
