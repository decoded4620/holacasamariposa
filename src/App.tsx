import "./App.css";
import { NavigateFunction, Route, Routes, useNavigate } from "react-router-dom";
import {
  useRef,
  MutableRefObject,
  useEffect,
  useState,
  useContext,
  useCallback,
} from "react";
import { ButtonId, ButtonData } from "./components/core/types";
import {
  getWindowWidth,
  windowResizeEffect,
} from "./components/resize/resizeListener";
import {
  getWindowScrollY,
  windowScrollEffect,
} from "./components/scroll/windowScrollListener";

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
import Casitas from "./pages/casitas";
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
    });
  });

  useEffect(() => {
    async function loadTranslation(): Promise<I18NData_Website> {
      try {
        // try to load based on users language
        return await reactCtx.i18n.loadTranslations("jp-JP"); //navigator.language);
      } catch (error) {
        // if this fails, load the default / fallback language
        console.error(error);
        return await reactCtx.i18n.loadTranslations();
      }
    }

    loadTranslation()
      .then((result) => seti18n(result))
      .catch((e) => {
        console.error(`Error loading translations: ${e}`);
      });
  }, [reactCtx.i18n]);

  const maxMobileViewWidth = 600;
  return (
    <Box onClick={() => toggleMenuOffIfOn()}>
      <Navigation
        darkMode={useDarkMode}
        mobileViewMaxWidth={675}
        menuItems={menuItems}
        handleMenuToggleButtonClick={() => onHamburgerClicked()}
        handleNavButtonClick={(navItemId) => onNavItemClicked(navItemId)}
        handleLogoButtonClick={() => onLogoClicked()}
        text={i18n.chrome?.siteLogoText ?? ""}
        shortText={i18n.chrome?.siteLogoShortText ?? ""}
      />

      <SlidingMenu
        ref={slidingMenu}
        menuItems={menuItems.concat(mobileMenuItems).concat(footerMenuItems)}
        onMenuItemClick={(id) => onMenuItemClicked(id)}
      />

      <Box sx={{ paddingTop: "0px" }} className={"pagearea"}>
        <ApplicationContextProvider value={defaultApplicationCtx}>
          <Routes>
            {/* Each route requires a reference to the sitePageManager instance which is shared globally. This tracks which page we're on */}
            <Route
              path="/"
              element={
                <Home
                  navigate={navigate}
                  pageTranslations={i18n.content?.home}
                  maxMobileViewWidth={maxMobileViewWidth}
                  pageRoute="/"
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
                />
              }
            />
            <Route
              path="/casitas"
              element={
                <Casitas
                  navigate={navigate}
                  pageTranslations={i18n.content?.casitas}
                  maxMobileViewWidth={maxMobileViewWidth}
                  pageRoute="/casitas"
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
                />
              }
            />
            <Route
              path="/location"
              element={
                <Casitas
                  navigate={navigate}
                  pageTranslations={i18n.content?.location}
                  maxMobileViewWidth={maxMobileViewWidth}
                  pageRoute="/location"
                />
              }
            />
            <Route
              path="/resources"
              element={
                <Casitas
                  navigate={navigate}
                  pageTranslations={i18n.content?.resources}
                  maxMobileViewWidth={maxMobileViewWidth}
                  pageRoute="/resources"
                />
              }
            />
            <Route
              path="/contact"
              element={
                <Casitas
                  navigate={navigate}
                  pageTranslations={i18n.content?.contact}
                  maxMobileViewWidth={maxMobileViewWidth}
                  pageRoute="/contact"
                />
              }
            />

            {/* external links */}
            <Route path="/ourfb" element={<ExternalLinkFBProfile />} />
            <Route path="/ourig" element={<ExternalLinkInstagramProfile />} />
            <Route path="/ourli" element={<ExternalLinkLinkedInProfile />} />
            <Route path="/ourairbnb" element={<ExternalLinkAirBnBProfile />} />
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
  );
}
