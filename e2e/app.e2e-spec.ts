import { NggCmsPage } from './app.po';

describe('ngg-cms App', () => {
  let page: NggCmsPage;

  beforeEach(() => {
    page = new NggCmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
