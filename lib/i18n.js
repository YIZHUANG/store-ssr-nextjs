class I18n {
  constructor({
    selectedLanguage,
    translations,
    translationsPath,
    fileName
  }) {
    this.selectedLanguage = selectedLanguage || "";
    this.translations = translations || {};
    this.translationsPath = translationsPath || "static/locale";
    this.fileName = fileName || "common.json";
  }
  async setLanguage(lang) {
    this.selectedLanguage = lang;
    if (!this.translations[lang]) {
      const translation = await this.loadTranslation(lang);
      this.translations = {
        ...this.translations,
        [lang]: translation
      };
    }
  }
  async loadTranslation(lang) {
    const translation = await import("../" +
      `${this.translationsPath}/${lang}/common.json`);
    return translation.default;
  }
  getSelectedLanguage() {
    return this.selectedLanguage;
  }
  getTranslation() {
    return this.translations[this.selectedLanguage];
  }
  getState() {
    return {
      selectedLanguage: this.selectedLanguage,
      translations: this.translations
    };
  }
}

export default I18n;
