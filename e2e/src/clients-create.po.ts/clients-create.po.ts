import { element, browser, by } from 'protractor';

export class ClientsCreatePage {
  fieldName = element(by.css('input[formControlName=name]'));
  fieldCPF = element(by.css('input[formControlName=cpf]'));
  fieldPhone = element(by.css('input[formControlName=phone]'));
  fieldBirth = element(by.css('input[formControlName=birth]'));
  fieldAddress = element(by.css('input[formControlName=address]'));
  fieldBrand = element(by.css('select[formControlName=brand]'));
  fieldModel = element(by.css('select[formControlName=model]'));
  navigateTo() {
    return browser.get('/cliente/cadastro');
  }

  getClientsTable() {
    return element(by.css('app-client-list table'));
  }

  getTitleHeader(): Promise<string> {
    return element(
      by.css('app-client-create section app-header header h3')
    ).getText() as Promise<string>;
  }

  getForm() {
    return element(by.css('app-client-create app-client-form')).isPresent();
  }

  thereIsClientsSaved() {
    return element(by.css('app-client-list table tbody tr')).isPresent();
  }
}
