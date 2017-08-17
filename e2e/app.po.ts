import { browser, element, by } from 'protractor';

export class WeatherPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('we-root h1')).getText();
  }
}
