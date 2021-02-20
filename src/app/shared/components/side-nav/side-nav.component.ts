import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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
  //   // public router: Router,
  //   private location: Location
  ) {
  }

  ngOnInit(): void {
  //   this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //   // this._commonService.castToggle.subscribe(toggle => this.isToggle = toggle);
  //   this.logoimage();
  }

  handleActiveClass(type) {
  //   // let relativePath: string = this.location.path().split('?')[0];
  //   let res: boolean;
  //   switch (type) {
  //     case 'home':
  //       res = false;
  //       for (let i = 0; i < this.home.length; i++) {
  //         // if (relativePath.includes(this.home[i])) {
  //         //   res = true
  //         // }
  //       }
  //       return res;
  //       break;
  //     case 'level':
  //       res = false;
  //       for (let i = 0; i < this.levelUrls.length; i++) {
  //         // if (relativePath.includes(this.levelUrls[i])) {
  //         //   res = true
  //         // }
  //       }
  //       return res;
  //       break;
  //     case 'tank':
  //       res = false;
  //       for (let i = 0; i < this.tankUrls.length; i++) {
  //         // if (relativePath.includes(this.tankUrls[i])) {
  //         //   res = true
  //         // }
  //       }
  //       return res;
  //       break;
  //     case 'route':
  //       res = false;
  //       for (let i = 0; i < this.routeUrls.length; i++) {
  //         // if (relativePath.includes(this.routeUrls[i])) {
  //         //   res = true
  //         // }
  //       }
  //       return res;
  //       break;

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
  //     default:
  //       return false
  //   }

  //   // let relativePath: string = this.location.path();

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

  removeTankClass(){
    this.tankDropdown.nativeElement.classList.remove('dropdown-active');
    this.tankIcon.nativeElement.classList.remove('down');
  }
  removeCustomerClass(){
    this.customerDropdown.nativeElement.classList.remove('dropdown-active');
    this.customerIcon.nativeElement.classList.remove('down');
  }
  removeOseClass(){
    this.oseDropdown.nativeElement.classList.remove('dropdown-active');
    this.oseIcon.nativeElement.classList.remove('down');
  }
  closeDropdown() {
    this.removeCustomerClass();
    this.removeOseClass();
    this.removeTankClass();
  }

  tDropdown(){
    this.removeCustomerClass();
    this.removeOseClass();
  }
  oDropdown(){
    this.removeCustomerClass();
    this.removeTankClass();
  }
  cDropdown(){
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

}

