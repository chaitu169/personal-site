import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrintServiceService {

  constructor() { }

  printComponent(method: string, component: string){
    console.log(method, 'of', component,  'executed');
  }
}
