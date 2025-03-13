import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addinstructor',
  imports: [FormsModule],
  templateUrl: './addinstructor.component.html',
  styleUrl: './addinstructor.component.css'
})
export class AddinstructorComponent implements OnInit{
  instructors: Instructor = new Instructor(0, '', '','', '','','','');
  isEditMode: boolean = false;
  
  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state && nav.extras.state['instructor']) {
      this.instructors = nav.extras.state['instructor'];
      debugger;
      this.isEditMode = true;
    }if(this.instructors.id == 0){
      this.isEditMode = false;
  }
  } 
  ngOnInit(): void {
    // Check if editing an existing instructor
    const state = history.state;
   if (state && state.instructor) {
      this.instructors = state.instructor;
     //  this.isEditMode = true;
    }
  }

 saveInstructor(): void {
   const instructors = JSON.parse(localStorage.getItem('instructors') || '[]');

   if (this.isEditMode) {
     // Update existing instructor
     const index = instructors.findIndex((p: Instructor) => p.id === this.instructors.id);
     if (index !== -1) {
       instructors[index] = this.instructors;
     }
   } else {
     // Add new instructor
     this.instructors.id = instructors.length > 0 ? Math.max(...instructors.map((p: Instructor) => p.id)) + 1 : 1;
     instructors.push(this.instructors);
   }

   // Save back to localStorage
   localStorage.setItem('instructors', JSON.stringify(instructors));
   this.router.navigate(['/instructorlist']); // Navigate back to instructor list
 }
}
export class Instructor{
  id:number;
  name:string;
  fname:string;
  mname:string;
  mobileno:string;
  email:string;
  subject:string;
  address:string;

  constructor(id:number,name:string,fname:string,mname:string,mobileno:string,email:string,suject:string,address:string){
    this.id=id;
    this.name=name;
    this.fname=fname;
    this.mname=mname;
    this.mobileno=mobileno;
    this.email=email;
    this.subject=suject;
    this.address=address;
  }

}
