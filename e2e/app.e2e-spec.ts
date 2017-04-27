import { UdemyNgAppPage } from './app.po';

describe('udemy-ng-app App', () => {
  let page: UdemyNgAppPage;

  beforeEach(() => {
    page = new UdemyNgAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
