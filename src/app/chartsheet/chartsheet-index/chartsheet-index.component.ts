import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-chartsheet-index',
  templateUrl: './chartsheet-index.component.html',
  styleUrls: ['./chartsheet-index.component.css']
})
export class ChartsheetIndexComponent implements OnInit {

  private URLs = {
    REGEX: 'https://docs.google.com/document/d/1bhobhh7FAa05oc2nhlQtwYMf5K5fmt76Fog3JLO_QdU/edit?usp=sharing',
    test: 'https://docs.google.com/document/d/e/2PACX-1vRQ7ak4nczYTVQvYhIr9grVREw6jTsDvVrJDC1BSXmb5L3axOdaPvWA2Eo9L2DWcEnTjlDS7uhWxIeW/pub'
  }
  url;

   constructor(
    protected _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.putSrc('regex');
  }

  putSrc(type) {
    switch (type) {
      case 'regex':
        this.url = this._sanitizer.bypassSecurityTrustResourceUrl(this.URLs.REGEX);
        break;
      case 'test':
        this.url = this._sanitizer.bypassSecurityTrustResourceUrl(this.URLs.test);
        break;

      default:
        break;
    }
  }
}
