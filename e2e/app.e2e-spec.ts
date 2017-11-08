import { TprojectPage } from './app.po';

describe('tproject App', function() {
  let page: TprojectPage;

  beforeEach(() => {
    page = new TprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
