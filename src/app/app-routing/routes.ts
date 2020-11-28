import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { HomeComponent } from './../home/home.component';
import { CourseComponent } from './../course/course.component';
import { CoursesComponent } from './../courses/courses.component';
import { LevelsComponent } from './../levels/levels.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'course/:id', component: CourseComponent },
  { path: 'levels', component: LevelsComponent },
  { path: '**', component: PageNotFoundComponent },
];
