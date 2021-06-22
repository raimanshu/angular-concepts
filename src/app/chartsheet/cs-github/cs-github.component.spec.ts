import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsGithubComponent } from './cs-github.component';

describe('CsGithubComponent', () => {
  let component: CsGithubComponent;
  let fixture: ComponentFixture<CsGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsGithubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
