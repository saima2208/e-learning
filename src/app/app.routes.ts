import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { StudentListComponent } from './student-list/student-list.component';
import { RegistrationComponent } from './registration/registration.component';
<<<<<<< HEAD

import { BookstoreComponent } from './bookstore/bookstore.component';
import { DetailsComponent } from './details/details.component';
import { ProgramdetailsComponent } from './programdetails/programdetails.component';
=======
import { RegisterComponent } from './register/register.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BooklistComponent } from './booklist/booklist.component';
>>>>>>> 57ff4e749f7ac93b451c4758403816a15aee5bcb

export const routes: Routes = [
    {path: '',component:HomeComponent},
    {path:'course',component:CoursesComponent},
    {path:'home',component:HomeComponent},
    {path:'courselist', component:CourseListComponent},
    {path:'addcourse', component:AddCourseComponent},
    {path:'admin', component:AdminPanelComponent},
    {path:'studentlist', component:StudentListComponent},
    {path:'register',component:RegistrationComponent},
<<<<<<< HEAD
    {path:'bookstore',component:BookstoreComponent},
    {path:'details',component:DetailsComponent},
    {path: 'coursedetails', component:ProgramdetailsComponent}
=======
    {path:'addbook',component:AddbookComponent},
    {path:'booklist', component:BooklistComponent},
>>>>>>> 57ff4e749f7ac93b451c4758403816a15aee5bcb
];
