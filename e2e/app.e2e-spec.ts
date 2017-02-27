import { ExeclExportPage } from './app.po';

describe('execl-export App', () => {
  let page: ExeclExportPage;

  beforeEach(() => {
    page = new ExeclExportPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
