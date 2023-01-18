import styles from "./home.module.scss";
import sharedStyles from "./shared-page-styles.module.scss";

import { Box } from "@mui/system";
import { BasePageProps } from "../app/base-page";
import { useContext, useState } from "react";
import { I18NData_HomePage } from "../app-i18n";
import CasitaCardContainer from "./home/casita-card-container";
import FeatureCardContainer from "./shared/feature-card-conainer";
import { navigateTo } from "../app/navigation";
import { useLocation, useNavigate } from "react-router-dom";
import ContactCardBar from "./shared/contact-card-bar";
import ContactCardBarButton from "./shared/contact-card-bar-button";
import { ButtonId } from "../components/core/types";
import LoaderSpinner from "../components/core/ui/loader-spinner";
import { useEffect } from "react";
import { imagesLoadedHandler } from "../components/core/windowloadhandler";
import {
  ReactApplicationContext,
  updateApplicationContext,
} from "../app/application-ctx";
export interface HomePageProps extends BasePageProps {
  pageTranslations?: I18NData_HomePage;
}

function Home(props: HomePageProps) {
  updateApplicationContext(
    useContext(ReactApplicationContext),
    props,
    useLocation()
  );
  // page content / translations
  const i18n = props.pageTranslations;
  const [isLoading, setIsLoading] = useState(true);

  //  This will run one time after the component mounts
  useEffect(() => {
    return imagesLoadedHandler(
      () => {
        setIsLoading(false);
      },
      (e) => console.error(`Well shit dude`, e)
    );
  }, []);
  return (
    <Box className={sharedStyles.page}>
      {/* Loader */}
      {isLoading && (
        <div className={"centercontent"}>
          <LoaderSpinner></LoaderSpinner>
        </div>
      )}

      {!isLoading && (
        <div>
          <Box className={styles.imagebg} />

          <Box className={sharedStyles.pagecontent} component="section">
            <h1 className={sharedStyles.pageHeader}>{i18n?.pageHeading}</h1>

            <div className={sharedStyles.pageText}>
              <p>{i18n?.intro}</p>
            </div>
          </Box>

          <Box className={sharedStyles.pagecontent} component="section">
            {/* Casita Cards */}

            <CasitaCardContainer
              handleCardSelection={(card) => navigateTo(card, props.navigate)}
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
              containerItems={
                i18n?.casitasFeatures.map((feature, i) => {
                  return {
                    blurb: feature.blurb,
                    fontAwesomeIconClassName: feature.fontAwesomeIconClassName,
                    idx: i,
                  };
                }) ?? []
              }
            />
          </Box>

          {/* Contact Section */}
          <div id="contactUs"></div>
          <Box
            className={
              sharedStyles.pagecontent + " " + sharedStyles.centercontent
            }
            component="section"
          >
            <ContactCardBar
              sectionHeading="Contact Us"
              sectionText="Through any of the following channels..."
              handleCardSelect={(id) => navigateTo(id, props.navigate)}
            />
            <ContactCardBarButton
              handleClick={(id: ButtonId) => navigateTo(id, props.navigate)}
              id="our_airbnb"
              altText="Air Bnb SuperHost Link"
              width={200}
              height={116}
              src="images/airbnb-superhost.jpg"
            />
          </Box>
        </div>
      )}
    </Box>
  );
}

export default function (props: HomePageProps) {
  const navigate = useNavigate();
  return <Home {...props} navigate={navigate} />;
}
