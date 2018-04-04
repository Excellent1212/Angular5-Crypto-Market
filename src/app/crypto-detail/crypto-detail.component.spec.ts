import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CryptoDetailComponent } from './crypto-detail.component';
import { CryptoPriceComponent } from '../crypto-price/crypto-price.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { DataService } from '../data.service';
import { routes } from '../app-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Chart } from 'chart.js';


describe('CryptoDetailComponent', () => {
  let component: CryptoDetailComponent;
  let fixture: ComponentFixture<CryptoDetailComponent>;
  let _data: DataService;
  let spy: any;

  // Setup
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientModule,
        FormsModule
      ],
      declarations: [
        CryptoDetailComponent,
        CryptoPriceComponent,
        NotfoundComponent
      ],
      providers: [
        DataService,
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    _data = TestBed.get(DataService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    _data = null;
    component = null;
  });

  // Component specs
  it('should create',
    inject([DataService], (_dataService: DataService) => {
      expect(component).toBeTruthy();
    })
  );

});
