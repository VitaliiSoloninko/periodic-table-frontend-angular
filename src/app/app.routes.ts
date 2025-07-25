import { Routes } from '@angular/router';
import { ElementDetailPageComponent } from './pages/element-detail-page/element-detail-page.component';
import { ElementSearchPageComponent } from './pages/element-search-page/element-search-page.component';
import { ElementsPageComponent } from './pages/elements-page/elements-page.component';

export const routes: Routes = [
  { path: '', component: ElementsPageComponent },
  { path: 'search', component: ElementSearchPageComponent },
  {
    path: 'element/:id',
    component: ElementDetailPageComponent,
  },
];
