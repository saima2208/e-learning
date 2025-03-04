export class Course {
    id: number;
    name: string;
    description: string;
    startDate: String;
    instructor: string;
    duration: number;

    constructor(id: number, name: string, description: string, startDate: String, instructor: string, duration: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.instructor = instructor;
        this.duration = duration;
    }
    
}