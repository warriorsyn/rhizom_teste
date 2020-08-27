import { browser, logging } from 'protractor';
import { ClientsPage } from './clients.po';

describe('workspace-project clients', () => {
  let page: ClientsPage;

  beforeEach(() => {
    page = new ClientsPage();
  });

  it('should navigate to client', () => {
    page.navigateTo();

    expect(page.getTitleHeader()).toEqual('Cadastro de clientes');
  });

  it('Should display table of clients', () => {
    page.navigateTo();
    expect(page.getClientsTable().isPresent()).toEqual(true);
  });

  // it('should delete client', () => {
  //   page.getDeleteButton().click();
  //   expect(page.getModalDelete()).toEqual('Excluir cliente ?');
  // });
});
