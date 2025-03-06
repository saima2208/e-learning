 import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
import { Router } from '@angular/router';
 

 @Component({
   selector: 'app-header',
   imports: [],
   templateUrl: './header.component.html',  
    styleUrl: './header.component.css'
 })
 export class HeaderComponent  implements OnInit{
students: Student = new Student(0,'','','','','','','');

isEditMode: boolean = false;
  
constructor(private router: Router) {
  const nav = this.router.getCurrentNavigation();
  if (nav?.extras.state && nav.extras.state['student']) {
    this.students = nav.extras.state['student'];
    debugger;
    this.isEditMode = true;
  }if(this.students.id == 0){
    this.isEditMode = false;
}
} 
ngOnInit(): void {
  // Check if editing an existing student
  const state = history.state;
 if (state && state.student) {
    this.students = state.student;
   //  this.isEditMode = true;
  }
}

saveStudent(): void {
 const students = JSON.parse(localStorage.getItem('students') || '[]');

 if (this.isEditMode) {
   // Update existing student
   const index = students.findIndex((p: Student) => p.id === this.students.id);
   if (index !== -1) {
     students[index] = this.students;
   }
 } else {
   // Add new student
   this.students.id = students.length > 0 ? Math.max(...students.map((p: Student) => p.id)) + 1 : 1;
   students.push(this.students);
 }

 // Save back to localStorage
 localStorage.setItem('students', JSON.stringify(students));
 //this.router.navigate(['/student-list']); // Navigate back to student list
 alert('Student saved successfully');
}
 }
