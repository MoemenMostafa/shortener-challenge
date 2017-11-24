import { ShortenerChallengePage } from './app.po';

describe('shortener-challenge App', () => {
  let page: ShortenerChallengePage;

  beforeEach(() => {
    page = new ShortenerChallengePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
