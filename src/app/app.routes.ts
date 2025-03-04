import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AddCourseComponent } from './add-course/add-course.component';

export const routes: Routes = [
    {path: '',component:HomeComponent},
    {path:'course',component:CoursesComponent},
    {path:'home',component:HomeComponent},
    {path:'courselist', component:CourseListComponent},
    {path:'add', component:AddCourseComponent}
];
