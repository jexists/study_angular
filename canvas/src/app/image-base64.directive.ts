import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appImageBase64]'
})
export class ImageBase64Directive {
  @Input('appImageBase64') path: string = '';

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    if (!this.path) return;

    // console.error(this.path);

    this.getDataUri(this.path, (base64: string) => {
      this.el.nativeElement.src = base64;
      this.el.nativeElement.setAttribute('src', base64);
      console.log(this.el.nativeElement.src);

      // var link = document.createElement("a");
      // link.setAttribute('download', '');
      // link.href = base64;
      // link.download = `${111}.png`;
      // document.body.appendChild(link);
      // link.click();
      // link.remove();
    })

  }

  getDataUri(targetUrl: string, callback: any) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    xhr.open('GET', proxyUrl + targetUrl);
    // xhr.open('GET', targetUrl);
    xhr.responseType = 'blob';
    xhr.send();
  }

}
