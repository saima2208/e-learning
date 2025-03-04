import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
import bootstrap from 'bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {
  // students: Student = new Student(0,'', '', '', '', '', '', '', '');
  //  newStudent: Student = new Student(0,'', '', '', '', '', '', '', '');
  //  isEditing: boolean = false;
  //  modal: bootstrap.Modal | undefined;
  //   constructor(private router: Router) {
  //      const nav = this.router.getCurrentNavigation();
  //      if (nav?.extras.state && nav.extras.state['student']) {
  //        this.students = nav.extras.state['student'];
  //        debugger;
  //        this.isEditing = true;
  //      }if(this.students.id == 0){
  //        this.isEditing = false;
  //    }
  //    } 
  //  ngOnInit(): void {
  //    throw new Error('Method not implemented.');
  //  }

  //  openModal(student?: Student) {
  //    if (student) {
  //      this.newStudent = { ...student };
  //      this.isEditing = true;
  //    } else {
  //      this.newStudent = new Student(0,'', '', '', '', '', '', '', '');
  //      this.isEditing = false;
  //    }

  //    const modalElement = document.getElementById('studentModal');
  //   if (modalElement) {
  //      this.modal = new bootstrap.Modal(modalElement);
  //      this.modal.show();
  //   }
  //  }
  //  saveStudent(): void {
  //     const students = JSON.parse(localStorage.getItem('students') || '[]');
   
  //     if (this.isEditing) {
  //       // Update existing student
  //       const index = students.findIndex((p: Student) => p.id === this.students.id);
  //       if (index !== -1) {
  //         students[index] = this.students;
  //       }
  //     } else {
  //       // Add new student
  //       this.students.id = students.length > 0 ? Math.max(...students.map((p: Student) => p.id)) + 1 : 1;
  //       students.push(this.students);
  //     }
   
  //     // Save back to localStorage
  //     localStorage.setItem('students', JSON.stringify(students));
  //     this.router.navigate(['/studentlist']); // Navigate back to student list
  //   }
   

}
