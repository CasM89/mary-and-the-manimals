import { MaryAndTheManimalsPage } from './app.po';

describe('mary-and-the-manimals App', function() {
  let page: MaryAndTheManimalsPage;

  beforeEach(() => {
    page = new MaryAndTheManimalsPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mary-and-the-manimals works!');
  });
});
