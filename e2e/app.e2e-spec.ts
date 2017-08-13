import { TvGarganoPage } from './app.po';

describe('tv-gargano App', () => {
  let page: TvGarganoPage;

  beforeEach(() => {
    page = new TvGarganoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
