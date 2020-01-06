import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

/**
 * Get diffence of a date with current date
 * <p> {{birthdate | year}} </p>
 */
@Pipe({
  name: 'year'
})
export class YearPipe implements PipeTransform {

  /**
   * Calcule Difference
   * @param value
   *
   * @return Diffence between dates
   */
  transform(value: string): number | string {
    if (value) {
      const year = moment(value, 'YYYY/MM/DD');
      return moment().diff(year, 'year');
    }
    return value;
  }

}
