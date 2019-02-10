import React from "react";

import { i18nStore } from "../../lib";

class Test extends React.Component {
  static async getInitialProps({ I18Store }) {
    // passed by our _app.js
    console.log(I18Store)
    return {};
  }
  render() {
    const selectedLanguage = i18nStore().getSelectedLanguage();
    return <div>hello, your selected language is {selectedLanguage}</div>;
  }
}

export default Test;
