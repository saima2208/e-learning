import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Instructor } from '../addinstructor/addinstructor.component';

@Component({
  selector: 'app-instructorlist',
  imports: [],
  templateUrl: './instructorlist.component.html',
  styleUrl: './instructorlist.component.css'
})
export class InstructorlistComponent implements OnInit{
instructors:Instructor[]=[];

constructor(private router: Router) {}

  ngOnInit(): void {
    // Load instructors from localStorage
    this.instructors = JSON.parse(localStorage.getItem('instructors') || '[]');
  }

  // Navigate to edit page
  editInstructor(instructor: Instructor): void {
    const id = instructor.id;
    this.router.navigate(['addinstructor'], { state: { instructor } });
  }

  // Delete instructor and update localStorage
  deleteInstructor(instructor: Instructor): void {
    if (confirm('Are you sure you want to delete this instructor?')) {
      this.instructors = this.instructors.filter((p) => p.id !== instructor.id);
      localStorage.setItem('instructors', JSON.stringify(this.instructors));
    }
  }
  addNewInstructor(): void {
    this.router.navigate(['/addinstructor'], { state: { instructor: new Instructor(0, '', '','', '','','','') } });
  }
}
