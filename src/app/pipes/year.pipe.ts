import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'year'
})
export class YearPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      const year = moment(value, 'YYYY/MM/DD');
      return moment().diff(year, 'year');
    }
    return value;
  }

}
