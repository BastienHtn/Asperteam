import { AsperteamPage } from './app.po';

describe('asperteam App', function() {
  let page: AsperteamPage;

  beforeEach(() => {
    page = new AsperteamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
