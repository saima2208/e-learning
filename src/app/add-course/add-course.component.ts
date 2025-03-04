import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  imports: [FormsModule],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent implements OnInit {
  courses: Course = new Course(0, '', '','', '',0);
  isEditMode: boolean = false;
  
  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state && nav.extras.state['course']) {
      this.courses = nav.extras.state['course'];
      debugger;
      this.isEditMode = true;
    }if(this.courses.id == 0){
      this.isEditMode = false;
  }
  } 
  ngOnInit(): void {
    // Check if editing an existing course
    const state = history.state;
   if (state && state.course) {
      this.courses = state.course;
     //  this.isEditMode = true;
    }
  }

 saveCourse(): void {
   const courses = JSON.parse(localStorage.getItem('courses') || '[]');

   if (this.isEditMode) {
     // Update existing course
     const index = courses.findIndex((p: Course) => p.id === this.courses.id);
     if (index !== -1) {
       courses[index] = this.courses;
     }
   } else {
     // Add new course
     this.courses.id = courses.length > 0 ? Math.max(...courses.map((p: Course) => p.id)) + 1 : 1;
     courses.push(this.courses);
   }

   // Save back to localStorage
   localStorage.setItem('courses', JSON.stringify(courses));
   this.router.navigate(['/courselist']); // Navigate back to course list
 }
}
