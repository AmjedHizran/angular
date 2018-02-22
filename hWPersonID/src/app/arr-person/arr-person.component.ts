import { Component } from '@angular/core';
import { Person } from '../app.person';

@Component({
  selector: 'app-arr-person',
  templateUrl: './arr-person.component.html',
  styleUrls: ['./arr-person.component.css']
})
export class ArrPersonComponent  {
    count = 0;
    personList: Array<Person> = new Array<Person>();
    showList = false;
    show = false;

    addPersonToList(name: any, id: number): void {
            this.count++;
            let temp: Person = new Person(name, id);
            let res = name.substr(0 , temp.name.length);
            if (temp.id * 0 === 0 && res * 0 !== 0 ) {
                this.personList.push(temp);
                this.showList = true;
            }else {
alert ('ERROR:some of field value is wrong! \nplease enter only characters in the NAME Field \nand only numbers in the ID Field');
            }
    }

    showPersonList(): void {
        if (this.count !== 0) {
        this.show = true;
    }
  }
}
