import { Component, OnInit } from '@angular/core';
import { Names } from './../app.name';
import { ComponentsService } from './../services/app.components.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

    constructor(private componentsService: ComponentsService) {}

          getName: Names;

          ngOnInit() {
            this.getName = this.componentsService.getName();
          }

        }
