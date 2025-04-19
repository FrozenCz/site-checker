import {inject, Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Pipe({
 name: 'getSrcFromIframe',
 standalone: true
})
export class GetSrcFromIframePipe implements PipeTransform {

 private sanitizer = inject(DomSanitizer);

 transform(iframeString: string): SafeResourceUrl | null {
  const srcMatch = iframeString.match(/src="([^"]*)"/);
  return srcMatch ? this.sanitizer.bypassSecurityTrustResourceUrl(srcMatch[1]) : null;
 }

}
