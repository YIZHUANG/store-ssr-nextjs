import I18n from "./i18n";

const isServer = typeof window === "undefined";

function getOrCreateStore(i18nState = {}) {
  if (isServer) {
    const I18nStore = new I18n(i18nState);
    return I18nStore;
  } else {
    const I18nStore = new I18n(i18nState);
    if (!window["I18nStore"]) {
      window["I18nStore"] = I18nStore;
    }
    return window["I18nStore"];
  }
}

export default getOrCreateStore;
