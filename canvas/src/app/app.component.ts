import { Component, ViewChild } from '@angular/core';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'canvas';

  @ViewChild('screen', { static: true }) screen: any;
  constructor(
    private captureService: NgxCaptureService
  ) {

  }

  onCapture() {

    this.captureService.getImage(this.screen.nativeElement, true)
      .pipe(
        tap(img => {
          console.log(img);
          var link = document.createElement("a");
          link.setAttribute('download', '');
          link.href = img;
          link.download = `test`;
          document.body.appendChild(link);
          link.click();
          link.remove();
        })
      ).subscribe();
  }
}
