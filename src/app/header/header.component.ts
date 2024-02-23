import { Component, OnDestroy, OnInit } from '@angular/core';
import { PrintServiceService } from '../printService/print-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(private printService: PrintServiceService) { }

  ngOnInit(): void {
    this.printService.printComponent("ngOnInit", "Header Component");
  }

  ngOnDestroy(): void {
    this.printService.printComponent("ngOnDestroy", "Header Component");
  }
}
