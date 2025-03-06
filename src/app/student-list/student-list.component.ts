import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../model/student.model';

@Component({
  selector: 'app-student-list',
  imports: [],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  students:Student[]=[];
  
  constructor(private router: Router) {}
  
    ngOnInit(): void {
      // Load students from localStorage
      this.students = JSON.parse(localStorage.getItem('students') || '[]');
    }
  
    // Navigate to edit page
    editStudent(student: Student): void {
      const id = student.id;
      this.router.navigate(['/add'], { state: { student } });
    }
  
    // Delete student and update localStorage
    deleteStudent(student: Student): void {
      if (confirm('Are you sure you want to delete this student?')) {
        this.students = this.students.filter((p) => p.id !== student.id);
        localStorage.setItem('students', JSON.stringify(this.students));
      }
    }
    addNewStudent(): void {
      this.router.navigate(['/add'], { state: { student: new Student(0, '', '','', '','','','') } });
    }

}
