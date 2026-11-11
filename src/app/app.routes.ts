import { Routes } from '@angular/router';
import { RoutePageComponent } from './pages/route-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: RoutePageComponent },
  { path: 'basics', component: RoutePageComponent },
  { path: 'before-dinner', component: RoutePageComponent },
  { path: 'table-etiquette', component: RoutePageComponent },
  { path: 'conversation', component: RoutePageComponent },
  { path: 'quiz', component: RoutePageComponent },
  { path: 'survey', component: RoutePageComponent },
  { path: 'references', component: RoutePageComponent },
  { path: '**', redirectTo: 'home' },
];
