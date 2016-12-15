import { SmartDumbExamplePage } from './app.po';

describe('smart-dumb-example App', function() {
  let page: SmartDumbExamplePage;

  beforeEach(() => {
    page = new SmartDumbExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
