import { ShortenerChallengePage } from './app.po';

describe('shortener-challenge App', () => {
  let page: ShortenerChallengePage;

  beforeEach(() => {
    page = new ShortenerChallengePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Please Enter Your URL to get a short one');
  });

  it('should display an input field', () => {
    page.navigateTo();
    expect(page.getInputField()).toEqual('url');
  });

  it('should display a shortener button', () => {
    page.navigateTo();
    expect(page.getButtonText()).toEqual('Get Short URL');
  });
});
