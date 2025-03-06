export class Student {
    id:number
    name: string;
    fatherName: string;
    motherName: string;
    address: string;
    mobileNo: string;
    email: string;
    password: string;
  

    constructor(id:number, name: string, fatherName: string, motherName: string, address: string, mobileNo: string, email: string, password: string, ) {
        this.id = id;
        this.name = name;
        this.fatherName = fatherName;
        this.motherName = motherName;
        this.address = address;
        this.mobileNo = mobileNo;
        this.email = email;
        this.password = password;
       
    }
}