import { FavoriteThingsPage } from './app.po';

describe('favorite-things App', () => {
  let page: FavoriteThingsPage;

  beforeEach(() => {
    page = new FavoriteThingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
