import { Component, OnInit } from '@angular/core';
import { PrintServiceService } from '../printService/print-service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  //printService : PrintServiceService;

  constructor(private printService: PrintServiceService) {
      
  }

  ngOnInit(): void {
    this.printService.printComponent("ngOnInit", 'first');
  }

}
