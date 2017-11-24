import { browser, by, element } from 'protractor';

export class ShortenerChallengePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h2')).getText();
  }
  getButtonText() {
    return element(by.css('app-root button')).getText();
  }

  getInputField() {
    return element(by.css('app-root input')).getAttribute('name');
  }
}
