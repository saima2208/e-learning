import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  imports: [],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {
courses:Course[]=[];

constructor(private router: Router) {}

  ngOnInit(): void {
    // Load courses from localStorage
    this.courses = JSON.parse(localStorage.getItem('courses') || '[]');
  }

  // Navigate to edit page
  editCourse(course: Course): void {
    const id = course.id;
    this.router.navigate(['/add'], { state: { course } });
  }

  // Delete course and update localStorage
  deleteCourse(course: Course): void {
    if (confirm('Are you sure you want to delete this course?')) {
      this.courses = this.courses.filter((p) => p.id !== course.id);
      localStorage.setItem('courses', JSON.stringify(this.courses));
    }
  }
  addNewCourse(): void {
    this.router.navigate(['/add'], { state: { course: new Course(0, '', '','', '',0) } });
  }
}
