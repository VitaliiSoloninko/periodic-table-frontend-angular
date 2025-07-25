import { Routes } from '@angular/router';
import { ElementDetailPageComponent } from './pages/element-detail-page/element-detail-page.component';
import { ElementSearchComponent } from './pages/element-search/element-search.component';
import { ElementsPageComponent } from './pages/elements-page/elements-page.component';

export const routes: Routes = [
  { path: '', component: ElementsPageComponent },
  { path: 'search', component: ElementSearchComponent },
  {
    path: 'element/:id',
    component: ElementDetailPageComponent,
  },
];
