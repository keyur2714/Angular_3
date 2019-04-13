import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('PipesDemo');
  });

  it('should display p message', () => {
    page.navigateTo();
    expect(page.getPText()).toEqual('PipesDemo');
  });
});
