export class BadhanWebPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('badhan-web-app h1')).getText();
  }
}
