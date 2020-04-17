import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domsanitezer'
})
export class DomsanitezerPipe implements PipeTransform {
  constructor(private domSanetize: DomSanitizer) {}

  transform(value: string, url: string): any {
    return this.domSanetize.bypassSecurityTrustResourceUrl(url + value);
  }

}
