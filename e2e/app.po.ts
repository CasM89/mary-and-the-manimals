export class MaryAndTheManimalsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mary-and-the-manimals-app h1')).getText();
  }
}
