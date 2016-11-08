import { ProjectTestsPage } from './app.po';

describe('project-tests App', function() {
  let page: ProjectTestsPage;

  beforeEach(() => {
    page = new ProjectTestsage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
