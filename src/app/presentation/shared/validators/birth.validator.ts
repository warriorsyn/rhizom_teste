import { AbstractControl } from '@angular/forms';

import * as moment from 'moment';

export class BirthValidator {
  /**
   * Método estático responsável pela validação dos dados.
   *
   * @param AbstractControl control
   * @return object ou null caso válido
   */
  static validate(control: AbstractControl): { [key: string]: boolean } {
    if (this.validateBirth(control.value)) {
      return null;
    }
    return { birth: true };
  }

  /**
   * Valida um CPF.
   *
   * @param date valor da data a ser validada.
   * @return boolean informando se o data é válida ou não.
   */
  static validateBirth(date: any): boolean {
    return moment(date).isValid();
  }
}
