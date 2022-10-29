import axios, { AxiosResponse } from "axios";

export interface I18NData_IPage {
  // empty interface may be extended
}

export interface I18NData_IUIChrome {
  // base type may be extended in the future
}

export interface I18NData_ISiteContent {
  // base type may be extended in the future
}

export interface I18NProps {
  /**
   * If a translation is not provided, what is the fallback.
   */
  fallbackLang: string;

  /**
   * Path to the translation JSON files.
   */
  siteLangDir: string;

  /**
   * File naming pattern for the translation file.
   * This can be `my-translation-${lang}.json`, for example.
   * I18N Provides a sensible default.
   */
  filePattern: string;
}

export class I18N {
  constructor(
    private readonly props: I18NProps = {
      // NOTE: siteLangDir points to the root of the `/public` directory which contains static assets.
      fallbackLang: "en-US",
      siteLangDir: process.env.PUBLIC_URL,
      filePattern: "site-translations-[lang].json",
    }
  ) {}

  /**
   * Loads the current translation based on site configuration and navigator language.
   *
   * @returns a set of translations
   */
  public async loadTranslations<
    T extends I18NData<CHROME_DATA, CONTENT_DATA>,
    CHROME_DATA extends I18NData_IUIChrome,
    CONTENT_DATA extends I18NData_ISiteContent
  >(language = this.props.fallbackLang): Promise<T> {
    let data: AxiosResponse<T>;
    const url =
      this.props.siteLangDir +
      this.props.filePattern.replace("[lang]", language);

    try {
      data = await axios.get(url);

      const { status, statusText } = data;
      if (status !== 200) {
        throw new I18LangNotSupportedError(
          `Lang ${language} not supported: ${status} - ${statusText}`
        );
      }
      console.info(
        `Translations loaded from ${url}, status: ${data.status} ${data.statusText} `,
        url
      );
      return data.data;
    } catch (error) {
      throw new I18LangNotSupportedError(
        `Lang ${language} not supported ${error}`
      );
    }
  }
}

export class I18NError extends Error {
  constructor(message: string) {
    super(message);
    this.name = I18NError.name;
  }
}

export class I18LangNotSupportedError extends I18NError {
  constructor(message: string) {
    super(message);
    this.name = I18LangNotSupportedError.name;
  }
}

export interface I18NData<
  CHROME_DATA extends I18NData_IUIChrome,
  CONTENT_DATA extends I18NData_ISiteContent
> {
  chrome?: CHROME_DATA;
  content?: CONTENT_DATA;
}
