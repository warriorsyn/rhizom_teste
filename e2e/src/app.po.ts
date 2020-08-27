import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getPresentation(): Promise<boolean> {
    return element(by.css('app-presentation')).isDisplayed() as Promise<
      boolean
    >;
  }
}
