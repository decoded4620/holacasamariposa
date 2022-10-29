import styles from "./home.module.scss";
import sharedStyles from "./shared-page-styles.module.scss";

import { Box } from "@mui/system";
import BasePage, { BasePageProps } from "../app/base-page";
import { ReactNode } from "react";
import { I18NData_HomePage, I18NData_HomePage_CasitaFeature } from "../app-i18n";
import CasitaCardContainer from "./home/casita-card-container";
import FeatureCardContainer from "./shared/feature-card-conainer";
import { navigateTo } from "../app/navigation";
import { useNavigate } from "react-router-dom";
import ContactCardBar from "./shared/contact-card-bar";
import ContactCardBarButton from "./shared/contact-card-bar-button";
import { ButtonId } from "../components/core/types";

export interface HomePageProps extends BasePageProps {
  pageTranslations?: I18NData_HomePage;
}

export class Home extends BasePage {
  constructor(public props: HomePageProps) {
    super(props);
  }

  public getTopContentHeight(): number {
    return 380;
  }

  render(): ReactNode {
    // page content / translations
    const i18n = this.props.pageTranslations;

    return (
      <Box className={sharedStyles.page}>
        {/* Top Content Image */}
        <Box className={styles.imagebg} />

        {/* Page heading and Intro */}
        <Box className={sharedStyles.pagecontent} component="section">
          <h1 className={sharedStyles.pageHeader}>{i18n?.pageHeading}</h1>
          <div
            className={sharedStyles.pageText}
            dangerouslySetInnerHTML={{ __html: i18n?.intro ?? "" }}
          />
        </Box>

        <Box className={sharedStyles.pagecontent} component="section">
          {/* Casita Cards */}

          <CasitaCardContainer
            handleCardSelection={(card) => navigateTo(card, this.props.navigate)}
            casitaJardinHeading={i18n?.casitaJardinHeading ?? ""}
            casitaMariposaHeading={i18n?.casitaMariposaHeading ?? ""}
            casitaBirdhouseHeading={i18n?.casitaBirdhouseHeading ?? ""}
            component="div"
          />
        </Box>

        {/* Features Section */}
        <Box className={sharedStyles.pagecontent} component="section">
          <FeatureCardContainer
            containerHeading={i18n?.casitasFeatureHeading ?? ""}
            containerText={i18n?.casitasFeatureText ?? ""}
            containerItems={i18n?.casitasFeatures.map((feature, i) => {
              return {
                blurb: feature.blurb,
                fontAwesomeIconClassName: feature.fontAwesomeIconClassName,
                idx: i
              }
            }) ?? []}
          />
        </Box>


        {/* Contact Section */ }
        <Box className={sharedStyles.pagecontent + ' ' + sharedStyles.centercontent} component="section">
          <ContactCardBar
           sectionHeading="Contact Us"
           sectionText="Through any of the following channels..."
           handleCardSelect={(id) => navigateTo(id, this.props.navigate)}
          />
          <ContactCardBarButton
              handleClick={(id: ButtonId) => navigateTo(id, this.props.navigate)}
              id="our_airbnb"
              altText="Air Bnb SuperHost Link"
              width={200}
              height={116}
              src="images/airbnb-superhost.jpg"
            />
        </Box>
      </Box>
    );
  }
}


export default function(props: HomePageProps) {
  const navigate = useNavigate();
  return <Home {...props} navigate={navigate} />;
}