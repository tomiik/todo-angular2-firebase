import { TodoAngular2FirebasePage } from './app.po';

describe('todo-angular2-firebase App', function() {
  let page: TodoAngular2FirebasePage;

  beforeEach(() => {
    page = new TodoAngular2FirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
