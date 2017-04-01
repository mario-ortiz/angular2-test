import { AngularTest.UiPage } from './app.po';

describe('angular-test.ui App', () => {
  let page: AngularTest.UiPage;

  beforeEach(() => {
    page = new AngularTest.UiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
