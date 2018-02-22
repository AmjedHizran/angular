import { Component , OnInit } from '@angular/core';
import { Names } from './app.name';
import { ComponentsService } from './services/app.components.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  nameField: Names ;
  constructor(private componentsService: ComponentsService) {}

   ngOnInit() {
     this.nameField = this.componentsService.getName();
    }
}
