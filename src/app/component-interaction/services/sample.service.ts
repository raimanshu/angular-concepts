import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  dataVariable;
  
  constructor() { }

  setComponentData(data){
    this.dataVariable = data;
  }

  getComponentData() {
    return this.dataVariable;
  }
}
