import { Teste123compreiPage } from './app.po';

describe('teste123comprei App', () => {
  let page: Teste123compreiPage;

  beforeEach(() => {
    page = new Teste123compreiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
