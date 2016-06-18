import { BadhanWebPage } from './app.po';

describe('badhan-web App', function() {
  let page: BadhanWebPage;

  beforeEach(() => {
    page = new BadhanWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('badhan-web works!');
  });
});
