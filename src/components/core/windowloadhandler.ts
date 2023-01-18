export const windowLoadHandler = (onLoad: () => void) => {
  const doOnLoad = () => {
    try {
      onLoad();
    } catch (e) {
      console.error(`Error handling window load ${e}`);
    }
  };

  // Check if the page has already loaded
  if (document.readyState === "complete") {
    doOnLoad();
  } else {
    window.addEventListener("load", doOnLoad);
    // Remove the event listener when component unmounts
    return () => window.removeEventListener("load", doOnLoad);
  }
};

export const imagesLoadedHandler = (
  onLoad: () => void,
  onFailed: (e: unknown) => void
) => {
  windowLoadHandler(() => {

    Promise.all(
      Array.from(document.images).map((img) => {
        if (img.complete) return Promise.resolve(img.naturalHeight !== 0);
        return new Promise((resolve) => {
          img.addEventListener("load", () => {
            resolve(true);
          });
          img.addEventListener("error", () => resolve(false));
        });
      })
    ).then((results) => {
      const doOnLoad = () => {
        try {
          onLoad();
        } catch (e) {
          console.error(`Error handle images loaded`, e);
        }
      };

      if (results.every((res) => res)) {
        doOnLoad();
      } else {
        console.warn("some images failed to load, all finished loading");
        onFailed(`Could not load images`);
      }
    });
  });
};
