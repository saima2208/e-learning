export class Student {
    id:number
    name: string;
    fatherName: string;
    motherName: string;
    address: string;
    phoneNo: string;
    email: string;
    password: string;
    confirmPassword: string;

    constructor(id:number, name: string, fatherName: string, motherName: string, address: string, phoneNo: string, email: string, password: string, confirmPassword: string) {
        this.id = id;
        this.name = name;
        this.fatherName = fatherName;
        this.motherName = motherName;
        this.address = address;
        this.phoneNo = phoneNo;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
}