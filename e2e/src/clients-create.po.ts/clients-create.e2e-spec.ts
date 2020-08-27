import { browser, logging } from 'protractor';
import { ClientsPage } from './clients.po';
import { ClientsCreatePage } from './clients-create.po';

describe('workspace-project clients', () => {
  let page: ClientsCreatePage;

  beforeEach(() => {
    page = new ClientsCreatePage();
  });

  it('should navigate to client create', () => {
    page.navigateTo();

    expect(page.getTitleHeader()).toEqual('Cadastrar cliente');
  });

  it('Should load client-form component', () => {
    page.navigateTo();

    expect(page.getForm()).toEqual(true);
  });

  it('Should fill the form', () => {
    page.fieldName.sendKeys('Jhon');
    page.fieldCPF.sendKeys('010.632.775-12');
    page.fieldPhone.sendKeys('(79) 9 9154-1139');
    page.fieldAddress.sendKeys('Av Anisio Azevedo');
    page.fieldBirth.sendKeys('10/10/2000');
    page.fieldBrand.sendKeys('{ id: 1, name: marca }');
    page.fieldModel.sendKeys('{id: 1, name: modelo}');

    expect(page.fieldName.getAttribute('value')).toEqual('Jhon');
    expect(page.fieldCPF.getAttribute('value')).toEqual('010.632.775-12');
    expect(page.fieldPhone.getAttribute('value')).toEqual('(79) 9 9154-1139');
    expect(page.fieldAddress.getAttribute('value')).toEqual(
      'Av Anisio Azevedo'
    );
    expect(page.fieldBirth.getAttribute('value')).toEqual('2000-10-10');
    // expect(page.fieldBrand.getAttribute('value')).toEqual(
    //   '{ id: 1, name: marca }'
    // );
    // expect(page.fieldModel.getAttribute('value')).toEqual(
    //   '{id: 1, name: modelo}'
    // );
  });
  // it('should delete client', () => {
  //   page.getDeleteButton().click();
  //   expect(page.getModalDelete()).toEqual('Excluir cliente ?');
  // });
});
