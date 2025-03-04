import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';

export const routes: Routes = [
    {path: '',component:HomeComponent},
    {path:'course',component:CoursesComponent},
    {path:'home',component:HomeComponent},
];
