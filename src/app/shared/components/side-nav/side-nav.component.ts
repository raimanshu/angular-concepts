import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @ViewChild('customerDropdown') customerDropdown: ElementRef;
  @ViewChild('oseDropdown') oseDropdown: ElementRef;
  @ViewChild('tankDropdown') tankDropdown: ElementRef;
  @ViewChild('tankIcon') tankIcon: ElementRef;
  @ViewChild('customerIcon') customerIcon: ElementRef;
  @ViewChild('oseIcon') oseIcon: ElementRef;
  // isCollapsed = false;
  // public currentUser: any = {
  //   distributor: {
  //     Name: ""
  //   }
  // };
  // logo: any = 'assets/img/defoultlogo.png'

  public isToggle: string = "false";
  dashboard = ['/intro'];
  angular_cli = ['/angular-cli'];
  rxjs = ['/rxjs'];
  references = ['/references'];
  chartsheet = ['/chartsheet'];
  dailyUpdates = ['/daily-updates'];



  // public isSmToggle: string = 'false';
  // home = ['/dashboard', '/graphic-data'];

  // companyUrls = ['/admin', '/employees', '/add-employee', '/edit-employee', '/distributor-info', '/login-records', '/consumption-billing-report',];
  // levelUrls = ['/outdoor-temp', '/level-chart', '/tank-level-info', '/product-history', '/degree-days', '/silent-report'];
  // tankUrls = ['/tanks-list', '/tank-edit', '/tank-add', '/inactive-tanks', '/unit-list', '/tanks', '/silent-report'];
  // routeUrls = ['/routes-list', '/edit-route', '/add-route', '/trucks-list', '/add-truck', '/edit-truck/'];
  // customersUrls = ['/customer-list', '/customer-login-record', '/add-customer', '/edit-customer/', '/customer-inquiries', '/customer-view'];
  // adminUrls = ['/admin', '/change-branch', '/skytracker-documents', '/contact-us', '/tech-support-request', '/propane-reserve', '/employees', '/add-employee', '/edit-employee/', '/distributor-info', '/consumption-billing-report', '/skytracker-documents', '/propane-reserve'];
  // help = ['/change-password', '/faq', '/how-to-install', '/request-help', '/help'];
  // oseUrls = ['/seasonal_targets'];
  // DataInSitesUrls = ['/data-insight'];
  constructor(
    //   // private _commonService: CommonService,
    public router: Router,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    //   this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //   // this._commonService.castToggle.subscribe(toggle => this.isToggle = toggle);
    //   this.logoimage();
  }

  handleActiveClass(type) {
      let relativePath: string = this.location.path().split('?')[0];
      let res: boolean;
      switch (type) {
        case 'dashboard':
          res = false;
          for (let i = 0; i < this.dashboard.length; i++) {
            if (relativePath.includes(this.dashboard[i])) {
              res = true
            }
          }
          return res;
          break;
        case 'angular_cli':
          res = false;
          for (let i = 0; i < this.angular_cli.length; i++) {
            if (relativePath.includes(this.angular_cli[i])) {
              res = true
            }
          }
          return res;
          break;
        case 'rxjs':
          res = false;
          for (let i = 0; i < this.rxjs.length; i++) {
            if (relativePath.includes(this.rxjs[i])) {
              res = true
            }
          }
          return res;
          break;
          case 'daily-updates':
            res = false;
            for (let i = 0; i < this.dailyUpdates.length; i++) {
              if (relativePath.includes(this.dailyUpdates[i])) {
                res = true
              }
            }
            return res;
            break;
        case 'references':
          res = false;
          for (let i = 0; i < this.references.length; i++) {
            if (relativePath.includes(this.references[i])) {
              res = true
            }
          }
          return res;
          break;
          case 'chartsheet':
            res = false;
            for (let i = 0; i < this.chartsheet.length; i++) {
              if (relativePath.includes(this.chartsheet[i])) {
                res = true
              }
            }
            return res;
            break;

    //     case 'customers':
    //       res = false;
    //       for (let i = 0; i < this.customersUrls.length; i++) {
    //         // if (relativePath.includes(this.customersUrls[i])) {
    //         //   res = true
    //         // }
    //       }
    //       return res;
    //       break;
    //     case 'admin':
    //       res = false;
    //       for (let i = 0; i < this.adminUrls.length; i++) {
    //         // if (relativePath.includes(this.adminUrls[i])) {
    //         //   res = true
    //         // }
    //       }
    //       return res;
    //       break;
    //     case 'ose':
    //       res = false;
    //       for (let i = 0; i < this.oseUrls.length; i++) {
    //         // if (relativePath.includes(this.oseUrls[i])) {
    //         //   res = true
    //         // }
    //       }
    //       return res;
    //       break;
    //     case 'DataInSites':
    //       res = false;
    //       for (let i = 0; i < this.DataInSitesUrls.length; i++) {
    //         // if (relativePath.includes(this.DataInSitesUrls[i])) {
    //         //   res = true
    //         // }
    //       }
    //       return res;
    //       break;
    //     case 'help':
    //       res = false;
    //       for (let i = 0; i < this.help.length; i++) {
    //         // if (relativePath.includes(this.help[i])) {
    //         //   res = true
    //         // }
    //       }
    //       return res;
    //       break;
        default:
          return false
      }


  }
  openDropdown(el, icon) {
    //   // let dropdowns = document.querySelectorAll('.sub-menu');
    //   // dropdowns.forEach(item => {
    //   //   item.classList.remove('dropdown-active');
    //   // })

    //   el.classList.toggle('dropdown-active')
    //   icon.classList.toggle('down')

    //   // $(".rotate").click(function () {
    //   //   $(this).toggleClass("down");
    //   // })
    // }
    // // onLogoChange(e) {
    // //   if (e.target.files) {
    // //     let file = e.target.files[0];
    // //     let reader = new FileReader();
    // //     reader.onload = () => {
    // //       this.logo = reader.result;
    // //     }
    // //     reader.readAsDataURL(file)
    // //   }
    // // }
    // logoimage() {
    //   // this._commonService.getDistributorLogo().subscribe(res => {
    //   //   if (res && res.logo_url != '') {
    //   //     this.logo = res.logo_url;
    //   //   }
    //   // })

  }

  removeTankClass() {
    this.tankDropdown.nativeElement.classList.remove('dropdown-active');
    this.tankIcon.nativeElement.classList.remove('down');
  }
  removeCustomerClass() {
    this.customerDropdown.nativeElement.classList.remove('dropdown-active');
    this.customerIcon.nativeElement.classList.remove('down');
  }
  removeOseClass() {
    this.oseDropdown.nativeElement.classList.remove('dropdown-active');
    this.oseIcon.nativeElement.classList.remove('down');
  }
  closeDropdown() {
    this.removeCustomerClass();
    this.removeOseClass();
    this.removeTankClass();
  }

  tDropdown() {
    this.removeCustomerClass();
    this.removeOseClass();
  }
  oDropdown() {
    this.removeCustomerClass();
    this.removeTankClass();
  }
  cDropdown() {
    this.removeOseClass();
    this.removeTankClass();
  }

  doToggle() {

    //   if (this.isToggle === 'false') {
    //     // $(".sub-menu").removeClass("dropdown-active");
    //     // $(".rotate").removeClass("down");
    //   }

    //   if (window.outerWidth > 1194) {
    //     this.isToggle = this.isToggle === 'false' ? 'true' : 'false';
    //   } else {
    //     this.isSmToggle = this.isSmToggle === 'false' ? 'true' : 'false';
    //   }
    //   // this._commonService.doToggle(this.isToggle);
  }

  gotoDashboard() {
    this.router.navigate(['/intro']);
  }

  gotoAngularCli() {
    this.router.navigate(['/angular-cli']);
  }
  gotoRxjs() {
    this.router.navigate(['/rxjs']);
  }
  gotoDailyUpdates(){
    this.router.navigate(['/daily-updates']);
  }
  gotoChartsheet(){
    this.router.navigate(['/chartsheet']);
  }
  gotoReferences(){
    this.router.navigate(['/references']);
  }


}

