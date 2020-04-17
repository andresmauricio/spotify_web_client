import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notimage'
})
export class NotimagePipe implements PipeTransform {

  transform(value: any[]): string {
    if (!value) return "assets/img/notfound.svg";

    if (value.length > 0) {
      return value[0].url;
    } else return "assets/img/notfound.svg";

  }

}
