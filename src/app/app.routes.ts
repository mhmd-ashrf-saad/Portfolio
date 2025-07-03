import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Projects } from './projects/projects';
import { Skills } from './skills/skills';
import { Contact } from './contact/contact';
import { ADMIN_ROUTES } from './admin/admin.routes';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'skills', component: Skills },
  { path: 'contact', component: Contact },
  { 
    path: 'admin', 
    children: ADMIN_ROUTES
  },
  { path: '**', redirectTo: '' }
];
