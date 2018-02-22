import { Names } from './../app.name';
import { Injectable } from '@angular/core';

@Injectable()
export class ComponentsService {

    nameService: Names = new Names('');

getName(): Names {
return this.nameService;
}
    setName(newName: string): void {
        this.nameService.nameC = newName;
    }
}
