export class Student {

   public id: number;
   public name: string;
   public age: number;
   public email: string;
   public phone: number;
   public address: string;
   public avg_grade: number;

   constructor(id?: number,
     name?: string,
      age?: number,
      email?: string,
       phone?: number,
        address?: string,
         avg_grade?: number )
         // tslint:disable-next-line:one-line
         {
this.id = id;
this.name = name;
this.age = age;
this.email = email;
this.phone = phone;
this.address = address;
this.avg_grade = avg_grade;
}

}
