export class Student {
    name: string;
    fatherName: string;
    motherName: string;
    address: string;
    phoneNo: string;
    email: string;
    password: string;
    confirmPassword: string;

    constructor(name: string, fatherName: string, motherName: string, address: string, phoneNo: string, email: string, password: string, confirmPassword: string) {
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