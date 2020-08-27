import { element, browser, by } from 'protractor';

export class ClientsPage {
  navigateTo() {
    return browser.get('/cliente');
  }

  getClientsTable() {
    return element(by.css('app-client-list table'));
  }

  getTitleHeader(): Promise<string> {
    return element(
      by.css('app-client-list section app-header header h3')
    ).getText() as Promise<string>;
  }

  thereIsClientsSaved() {
    return element(by.css('app-client-list table tbody tr')).isPresent();
  }

  getDeleteButton() {
    return element(
      by.css('app-client-list table tbody tr .td-actions .delete-btn')
    );
  }

  getModalDelete() {
    return element(
      by.css('app-client-list .swal2-container .swal2-title')
    ).getText();
  }
}
