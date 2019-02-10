import React from "react";
import App, { Container } from "next/app";

import i18Store from "../lib/i18nStore";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const {
      query: { locale }
    } = ctx;
    const I18Store = i18Store();
    await I18Store.setLanguage(locale || "en");
    ctx.I18Store = I18Store; // so that any of our pages will have access to the store instance.
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps, i18nState: I18Store.getState() };
  }

  constructor(props) {
    super(props);
    this.I18Store = i18Store(props.i18nState);
    /*
    by creating a constructor here it will do the following:
    const I18nStore = new I18n(props.i18nState);
    window["I18nStore"] = I18nStore;
    */
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
