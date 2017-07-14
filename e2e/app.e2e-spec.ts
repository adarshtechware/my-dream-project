import { MyDreamProjectPage } from './app.po';

describe('my-dream-project App', () => {
  let page: MyDreamProjectPage;

  beforeEach(() => {
    page = new MyDreamProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
