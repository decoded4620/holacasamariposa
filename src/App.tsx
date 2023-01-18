import "./App.css";
import CacheBuster from "react-cache-buster";
import { NavigateFunction, Route, Routes, useNavigate } from "react-router-dom";
import {
  useRef,
  MutableRefObject,
  useEffect,
  useState,
  useContext,
  useCallback,
} from "react";
import { ButtonId } from "./components/core/types";
import {
  getWindowWidth,
  windowResizeEffect,
} from "./components/resize/resizeListener";
import {
  getWindowScrollY,
  windowScrollEffect,
} from "./components/scroll/windowScrollListener";

import { config as fontAwesomeSvgConfig } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'


// Material Components
import { Box } from "@mui/material";

// Shared Components
import {
  ApplicationContextProvider,
  defaultApplicationCtx,
  ReactApplicationContext,
} from "./app/application-ctx";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/site-footer/footer";
import SlidingMenu from "./components/sliding-menu/sliding-menu";

// Site Specific Components
import { I18NData_Website } from "./app-i18n";
import ExternalLinkAirBnBProfile from "./pages/external/externalLinkAirBnBProfile";
import Home from "./pages/home";
import {
  footerMenuItems,
  menuItems,
  mobileMenuItems,
  navigateTo,
} from "./app/navigation";
import ElJardin from "./pages/eljardin";
import Mariposa from "./pages/mariposa";
import Birdhouse from "./pages/birdhouse";
import ExternalLinkFBProfile from "./pages/external/externalLinkFBProfile";
import ExternalLinkInstagramProfile from "./pages/external/externalLinkInstagramProfile";
import ExternalLinkLinkedInProfile from "./pages/external/externalLinkLinkedInProfile";
import ExternalLinkGmail from "./pages/external/externalLinkGmail";
import LoaderSpinner from "./components/core/ui/loader-spinner";

fontAwesomeSvgConfig.autoAddCss = false

export default function App() {

  // context and navigation generic components
  const reactCtx = useContext(ReactApplicationContext);
  const navigate: NavigateFunction = useNavigate();

  // Sliding Menu Object
  const slidingMenu: MutableRefObject<SlidingMenu | null> = useRef(null);

  // buttons, { id, label } for menu display and click identification wiring

  const i18nData: I18NData_Website = {};

  // states
  const [i18n, seti18n] = useState(i18nData);
  const [useDarkMode, setUseDarkMode] = useState(true);
  const [width, setWidth] = useState(getWindowWidth());
  const [scrollY, setScrollY] = useState(getWindowScrollY());

  const onHamburgerClicked = (): void => {
    toggleMenu();
  };

  const onMenuItemClicked = (id: ButtonId) => {
    navigateTo(id, navigate);
  };

  const onNavItemClicked = (id: ButtonId): void => {
    navigateTo(id, navigate);
  };

  const onLogoClicked = (): void => {
    navigateTo("home", navigate);
  };

  const menuIsToggled = (): boolean => {
    return slidingMenu.current?.isToggled() ?? false;
  };

  const toggleMenu = useCallback(() => {
    if (slidingMenu.current) {
      const menuRef: SlidingMenu = slidingMenu.current;
      menuRef.toggle();
    }

    setUseDarkMode(
      menuIsToggled() &&
        scrollY <= reactCtx.currentPageProps.topContentHeight - 64
    );
  }, [scrollY, reactCtx.currentPageProps.topContentHeight]);

  const toggleMenuOffIfOn = useCallback(() => {
    // closes the sliding menu if we click outside of its area
    if (menuIsToggled()) {
      toggleMenu();
    }
  }, [toggleMenu]);

  useEffect(() => {
    return windowResizeEffect(() => {
      setWidth(getWindowWidth());
      toggleMenuOffIfOn();
    });
  }, [toggleMenuOffIfOn]);

  useEffect(() => {
    return windowScrollEffect(() => {
      setScrollY(getWindowScrollY());

      if (!menuIsToggled()) {
        setUseDarkMode(
          scrollY <= reactCtx.currentPageProps.topContentHeight - 64
        );
      }
    }, 0);
  });

  useEffect(() => {
    async function loadTranslation(): Promise<I18NData_Website> {
      try {
        // try to load based on users language
        return await reactCtx.i18n.loadTranslations(navigator.language);
      } catch (error) {
        // if this fails, load the default / fallback language
        console.error(error);
        return await reactCtx.i18n.loadTranslations();
      }
    }

    loadTranslation()
      .then((result) => {
        seti18n(result);
      })
      .catch((e) => {
        console.error(`Error loading translations: ${e}`);
      });
  }, [reactCtx.i18n]);

  const isProduction = process.env.NODE_ENV === "production";

  const maxMobileViewWidth = 600;



  return (
    <CacheBuster
      currentVersion={1.0}
      isEnabled={isProduction} //If false, the library is disabled.
      isVerboseMode={false} //If true, the library writes verbose logs to console.
      loadingComponent={
        <div className={"centercontent"}>
          <LoaderSpinner></LoaderSpinner>
        </div>
      } //If not pass, nothing appears at the time of new version check.
      metaFileDirectory={"."} //If public assets are hosted somewhere other than root on your server.
    >
      <Box onClick={() => toggleMenuOffIfOn()}>
        <Navigation
          darkMode={useDarkMode}
          mobileViewMaxWidth={maxMobileViewWidth}
          menuItems={menuItems}
          handleMenuToggleButtonClick={() => onHamburgerClicked()}
          handleNavButtonClick={(navItemId) => onNavItemClicked(navItemId)}
          handleLogoButtonClick={() => onLogoClicked()}
          text={i18n.chrome?.siteLogoText || ""}
          shortText={i18n.chrome?.siteLogoShortText || ""}

        />

        <SlidingMenu
          ref={slidingMenu}
          menuItems={menuItems.concat(mobileMenuItems).concat(footerMenuItems)}
          onMenuItemClick={(id) => onMenuItemClicked(id)}
        />

        <Box sx={{ paddingTop: "0px" }} className={"pagearea"}>
          <ApplicationContextProvider value={defaultApplicationCtx}>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    navigate={navigate}
                    pageTranslations={i18n.content?.home}
                    maxMobileViewWidth={maxMobileViewWidth}
                    pageRoute="/"
                    topContentHeight={380}
                  />
                }
              />
              <Route
                path="/home"
                element={
                  <Home
                    navigate={navigate}
                    pageTranslations={i18n.content?.home}
                    maxMobileViewWidth={maxMobileViewWidth}
                    pageRoute="/home"
                    topContentHeight={380}
                  />
                }
              />
              <Route
                path="/eljardin"
                element={
                  <ElJardin
                    navigate={navigate}
                    pageTranslations={i18n.content?.eljardin}
                    maxMobileViewWidth={maxMobileViewWidth}
                    pageRoute="/eljardin"
                    topContentHeight={280}
                    bookingLink="https://www.airbnb.com/rooms/43533535"
                    pageText="The spacious garden flat, with ample space to mingle and relax. Its eco friendly living, with an incredibly authentic Mexican feel."
                  />
                }
              />
              <Route
                path="/mariposa"
                element={
                  <Mariposa
                    navigate={navigate}
                    pageTranslations={i18n.content?.mariposa}
                    maxMobileViewWidth={maxMobileViewWidth}
                    pageRoute="/mariposa"
                    topContentHeight={280}
                    bookingLink="https://airbnb.com/h/casamariposa"
                    pageText="This charming and spacious getaway is bright, colorful and full of character, with plenty of room to unpack and relax."
                  />
                }
              />
              <Route
                path="/birdhouse"
                element={
                  <Birdhouse
                    navigate={navigate}
                    pageTranslations={i18n.content?.birdhouse}
                    maxMobileViewWidth={maxMobileViewWidth}
                    pageRoute="/birdhouse"
                    topContentHeight={300}
                    bookingLink="https://airbnb.com/h/sayulita-birdhouse"
                    pageText="This penthouse studio offers welcome afternoon breezes, beautiful sunset views, a copper soaking tub for two and private outdoor kitchen and lounging space."
                  />
                }
              />

              {/* external links */}
              <Route path="/ourfb" element={<ExternalLinkFBProfile />} />
              <Route path="/ourig" element={<ExternalLinkInstagramProfile />} />
              <Route path="/ourli" element={<ExternalLinkLinkedInProfile />} />
              <Route
                path="/ourairbnb"
                element={<ExternalLinkAirBnBProfile />}
              />
              <Route path="/ourgmail" element={<ExternalLinkGmail />} />
            </Routes>
          </ApplicationContextProvider>
        </Box>

        {width > maxMobileViewWidth ? (
          <Footer
            handleNavItemClick={(buttonId) => onNavItemClicked(buttonId)}
            menuItems={footerMenuItems}
            mobileViewMaxWidth={maxMobileViewWidth}
          />
        ) : null}
      </Box>
    </CacheBuster>
  );
}
