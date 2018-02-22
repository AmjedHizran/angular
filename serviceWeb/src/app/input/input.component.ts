import { Component, OnInit } from '@angular/core';
import { Names } from './../app.name';
import { ComponentsService } from './../services/app.components.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

    constructor(private componentsService: ComponentsService) {}

      input: Names = new Names('amjd');

      ngOnInit() {
        this.input = this.componentsService.getName();
      }
      clickFunc(name: string) {
        this.componentsService.setName(name);
      }

    }
