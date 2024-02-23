import { Component, OnInit, inject } from '@angular/core';
import { PrintServiceService } from './printService/print-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'new-app';
  //printService : PrintServiceService;

  constructor(private printService: PrintServiceService){
  }

  ngOnInit(): void {
    this.printService.printComponent("ngOnInit", 'app');
  }
}
