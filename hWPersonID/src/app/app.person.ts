export class Person {

private idField: number;
private nameField: string;

constructor(name: string , id: number) {
    this.nameField = name;
    this.idField = id;
}

//////// GETTER & SETTER
get id(): number {
return this.idField;
}
get name(): string {
return this.nameField;
}

set id(id: number){
    this.idField = id;
}

set name(name: string){
      this.nameField = name;
}

}


